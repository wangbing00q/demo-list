const Router=require('koa-router');
const path=require('path')
const MovieModel=require ('./schemas/movieSchema');
const mongoose=require('mongoose');
const {
	PreMovieInfoModel,
	SellingMovieInfoModel,
	DownMovieInfoModel
}=require ('./schemas/movieInfoSchema');

const router =new Router();

router
.post('/addmovie',async ctx=>{
	// console.log(ctx.request.body)
	const {num,name,is3DIMAX,Selling,type,score,area,date,pic}=ctx.request.body;
	
	var res=await MovieModel.findOne({num});
	if(res)	return ctx.body={state:100,msg:'影片序号重复'};
	res=await MovieModel.findOne({name});
	if(res) return ctx.body={state:100,msg:'影片名重复'};
	const  newMovie=MovieModel({
		num,name,is3DIMAX,Selling,type,score,area,date,pic
	});
	let {length,wantWatch,bookingOffice,introduction,director,have}={
		length:0,
		wantWatch:0,
		bookingOffice:"暂无",
		introduction:'暂无',
		director:'暂无',
		have:['暂无']
	} ;
	switch(Selling){
		case '在售':var newInfo=SellingMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have}); break;
		case '预售':var newInfo=PreMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have}); break;
		case '售空':var newInfo=DownMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have}); break;
	}
	var _res=await newInfo.save();
	res=await newMovie.save();
	if(res&&_res) return ctx.body={state:200,msg:'操作成功'};
	
	return ctx.body={state:100,msg:'操作失败'};

}).get('/movielist' ,async ctx=>{
	const data=await MovieModel.find({});
	ctx.body=data;
}).post('/delmovie' ,async ctx=>{
	const data=ctx.request.body.postData;
	let suc=[];
	for(let i=0;i<data.length;i++){
		data[i]=mongoose.Types.ObjectId(data[i]);
		const _data=await MovieModel.findOne({_id:data[i]});
		switch(_data.Selling){
			case '预售':await PreMovieInfoModel.deleteOne({num:_data.num});break;
			case '在售':await SellingMovieInfoModel.deleteOne({num:_data.num});break;
			case '售空':await DownMovieInfoModel.deleteOne({num:_data.num});break;
		}
		var res=await MovieModel.deleteOne({_id:data[i]});	
		if(res) suc.push(i);
	};
	
	if(suc.length===data.length) return  ctx.body= {state:200,msg:'操作成功'}
	ctx.body= {state:100,msg:'操作失败',err:suc.length}
}).post('/edit' , async ctx=>{
	// console.log(ctx.request.body);
	let _id =mongoose.Types.ObjectId(ctx.request.body._id);
	var res=await MovieModel.findOne({_id});
	if(res) return ctx.body={res,state:200};
	return ctx.body={state:100}
}).post('/savemovie', async ctx=>{
	let {_id,num,name,is3DIMAX,Selling,type,score,area,date,pic}=ctx.request.body;
	_id=mongoose.Types.ObjectId(_id);
	let _num=await MovieModel.findOne({_id});
	let _Selling=await MovieModel.findOne({_id});
	_Selling=_Selling['Selling'];
	// console.log(_Selling);
	_num=_num['num'];
	// console.log(_num);
	var res =await MovieModel.deleteOne({_id});
	let length,wantWatch,bookingOffice,introduction,director,have;
	if(res){
		var _res=await MovieModel.findOne({num});
		if(_res)	return ctx.body={state:100,msg:'影片序号重复'};
		_res=await MovieModel.findOne({name});
		if(_res) return ctx.body={state:100,msg:'影片名重复'};
		const  newMovie=MovieModel({
			num,name,is3DIMAX,Selling,type,score,area,date,pic
		});
		if(_Selling=='在售'){
			var _data= await SellingMovieInfoModel.findOne({num:_num});
			length=_data.length;
			wantWatch=_data.wantWatch;
			bookingOffice=_data.bookingOffice;
			introduction=_data.introduction;
			director=_data.director;
			have=_data.have;
			await SellingMovieInfoModel.deleteOne({num:_num});
		}
		if(_Selling=='售空'){
			var _data= await DownMovieInfoModel.findOne({num:_num});
			length=_data.length;
			wantWatch=_data.wantWatch;
			bookingOffice=_data.bookingOffice;
			introduction=_data.introduction;
			director=_data.director;
			have=_data.have;
			await DownMovieInfoModel.deleteOne({num:_num});
		}
		if(_Selling=='预售'){
			var _data= await PreMovieInfoModel.findOne({num:_num});
			length=_data.length;
			wantWatch=_data.wantWatch;
			bookingOffice=_data.bookingOffice;
			introduction=_data.introduction;
			director=_data.director;
			have=_data.have;
			await PreMovieInfoModel.deleteOne({num:_num});
		};
		if(Selling=='在售'){
			var newInfo=SellingMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have})
		};
		if(Selling=='预售'){
			var newInfo=PreMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have})
		};
		if(Selling=='售空'){
			var newInfo=DownMovieInfoModel({num,name,length,wantWatch,bookingOffice,introduction,director,have})
		};

		var _res=await newInfo.save();
		res=await newMovie.save();
		if(res&&_res) return ctx.body={state:300,msg:'操作成功'};
	}
	return ctx.body={state:100,msg:'操作失败'};
})



module.exports= router;