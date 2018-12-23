const Router=require('koa-router');
const path=require('path')
const {
	PreMovieInfoModel,
	SellingMovieInfoModel,
	DownMovieInfoModel
}=require ('./schemas/movieInfoSchema');
const mongoose=require('mongoose');
const MovieModel=require ('./schemas/movieSchema');


const router =new Router();




router.post('/getinfo',async ctx=>{
	const {selType}=ctx.request.body;
	const data=await MovieModel.find({Selling:selType});
	let arr=[];
	for(var i=0;i<data.length;i++){
		arr.push(data[i].num);
	}
	let postData=[]
	if(selType==='在售'){
		for(var i=0;i<arr.length;i++){
			var item=await SellingMovieInfoModel.findOne({num:arr[i]});
			postData.push(item);
		}
	}
	if(selType==='预售'){
		for(var i=0;i<arr.length;i++){
			var item=await PreMovieInfoModel.findOne({num:arr[i]});
			postData.push(item);
		}
	}
	if(selType==='售空'){
		for(var i=0;i<arr.length;i++){
			var item=await DownMovieInfoModel.findOne({num:arr[i]});
			postData.push(item);
		}
	};
	if(postData) return  ctx.body=postData;
	return ctx.body=[];
}).post('/editinfo',async ctx=>{
	// console.log(ctx.request.body);
	var str=ctx.request.body.queryStr.slice(1);
	str=str.replace(/=|&&/g,'*');
	const arr=str.split('*');
	// console.log(arr);
	const _id=mongoose.Types.ObjectId(arr[1]);
	const num=Number(arr[3]);
	let data=await MovieModel.findOne({num});
	let res={};
	switch(data.Selling){
		case '预售': res=await PreMovieInfoModel.findOne({_id});break;
		case '售空': res=await DownMovieInfoModel.findOne({_id});break;
		case '在售': res=await SellingMovieInfoModel.findOne({_id});break;
	};
	if(res) return ctx.body={state:200,postData:res};

	return ctx.body={state:100,postData:{}}
	
}).post('/saveinfo',async ctx=>{
	// console.log(ctx.request.body);
	let {_id,num,name,length,wantWatch,bookingOffice,introduction,director,have}=ctx.request.body;
	_id=mongoose.Types.ObjectId(_id);
	let data=await MovieModel.findOne({num});
	let res={};
	switch(data.Selling){
		case '预售': res=await PreMovieInfoModel.deleteOne({_id});break;
		case '售空': res=await DownMovieInfoModel.deleteOne({_id});break;
		case '在售': res=await SellingMovieInfoModel.deleteOne({_id});break;
	};
	if(res&&data.Selling==='预售'){
		var newMovieInfo=PreMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have});
		res=await newMovieInfo.save();
	};
	if(res&&data.Selling==='在售'){
		var newMovieInfo=SellingMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have});
		res=await newMovieInfo.save();
	};
	if(res&&data.Selling==='售空'){
		var newMovieInfo=DownMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have});
		res=await newMovieInfo.save();
	}
	if(res) return ctx.body={state:200,msg:'操作成功'};

	ctx.body={state:100,msg:'操作失败'};
})



module.exports=router

