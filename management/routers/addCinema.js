const Router=require('koa-router');
const path=require('path')
const MovieModel=require ('./schemas/movieSchema');
const mongoose=require('mongoose');

const CinemaModel=require('./schemas/cinemaSchema');


const router=new Router();


router
.get('/addcinema',async ctx=>{
	const postData=await MovieModel.find({});
	if(postData) return ctx.body={state:200,postData};
	return ctx.body={state:100,postData:[]};
})
.post('/addcinema',async ctx=>{
	const {num,name,address,brand,area,district,sproom,hadmovie}=ctx.request.body;
	var res=await CinemaModel.findOne({num});
	if(res)	return ctx.body={state:100,msg:'影院序号重复'};
	res=await CinemaModel.findOne({name});
	if(res) return ctx.body={state:100,msg:'影院名重复'};
	const  newCinema=CinemaModel({
		num,name,address,brand,area,district,sproom,hadmovie
	});
	res=await newCinema.save();
	if(res) return ctx.body=ctx.body={state:200,msg:'操作成功！'};
	return ctx.body={state:200,msg:'操作失败'};
})
.post('/getcinema',async ctx=>{
	// console.log(ctx.request.body);
	let postData=[];
	if(ctx.request.body.where=='全部'){
		postData=await CinemaModel.find({});
	}else {
		postData=await CinemaModel.find({area:ctx.request.body.where});
	}
	if(postData)return ctx.body={state:200,postData}

	return ctx.body={state:200,postData:[]};
})
.post('/delcinema',async ctx=>{
	// console.log(ctx.request.body);
	const ids=ctx.request.body.postData;
	let res=[]
	for(let i=0;i<ids.length;i++){
		let _id=mongoose.Types.ObjectId(ids[i]);
		res=res.push(await CinemaModel.deleteOne({_id}))
	}
	if(res)return ctx.body={state:200,msg:'操作成功'}
	ctx.body={state:100,msg:'操作失败',err:res.lengths}
})
.post('/editcinema',async ctx=>{
	// console.log(ctx.request.body);
	let _id=mongoose.Types.ObjectId(ctx.request.body._id);
	// console.log(_id)
	var res=await CinemaModel.findOne({_id});
	// console.log(res);
	if(res) return ctx.body={state:200,res};
	ctx.body={state:100,res:{}};
})
.post('/saveeditcinema',async ctx=>{
	let {num,name,address,brand,area,district,sproom,hadmovie,_id}=ctx.request.body;
	_id=mongoose.Types.ObjectId(_id);
	var res=await CinemaModel.deleteOne({_id});
	if(res) {
		var _res=await CinemaModel.findOne({num});
		if(_res)	return ctx.body={state:100,msg:'影院序号重复'};
		_res=await CinemaModel.findOne({name});
		if(_res) return ctx.body={state:100,msg:'影院名重复'};
		var newCinema=CinemaModel({
			num,name,address,brand,area,district,sproom,hadmovie
		})
		res=await newCinema.save();
		if(res) return ctx.body={state:300,msg:'操作成功！'};

		return ctx.body={state:100,msg:'操作失败'};
	}else{
		return ctx.body={state:100,msg:'操作失败'};
	}
	
	
})


module.exports=router;