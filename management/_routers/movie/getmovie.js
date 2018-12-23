const Router=require('koa-router');
const path=require('path')
const MovieModel=require ('../../routers/schemas/movieSchema');
const mongoose=require('mongoose');
const {
	PreMovieInfoModel,
	SellingMovieInfoModel,
	DownMovieInfoModel
}=require ('../../routers/schemas/movieInfoSchema');

const router =new Router();

function mergeData(m,n){
	
	for(var i=0;i<m.length;i++){
		for(var j=0;j<n.length;j++){
			if(m[i].num==n[j].num){
				m[i]={
					...m[i],
					pic:n[j].pic,
					is3DIMAX:n[j].is3DIMAX,
					Selling:n[j].Selling,
					type:n[j].type,
					score:n[j].score,
					area:n[j].area,
					date:n[j].date
				};
			}
		}
	};
	return m
};
function filterData(obj,data){
	// console.log(data.sellingMovie);
	let _data=[];
	let lh=0;
	// console.log(obj['Selling']);
	for(var item in obj){
		if(item=='Selling'){
			switch(obj[item]){
				case '在售':_data=[...data.sellingMovie];break;
				case '预售':_data=[...data.preMovie];break;
				case '售空':_data=[...data.downMovie];break;
			};
			// console.log(_data);
		}else if(item=='type'){
			if(obj[item]!=''){
				var filterObj=obj[item];
				_data=_data.filter(item=>{
					var flag=false;
					for(var i=0;i<item.type.length;i++){
						if(item.type[i]==filterObj){
							flag=true;
							break;
						}
					};
					return flag;
				})
			};
			// console.log(_data.length);
		}else if(item=='area'){
			if(obj[item]!=''){
				var filterObj=obj[item];
				_data=_data.filter(item=>(item.area==filterObj))
			}
			// console.log(_data.length);
		}else if(item=='date'){
			if(obj[item]!=''){
				var filterObj=obj[item];	
				_data=_data.filter(item=>(item.date.split('/')[0]==filterObj));
			}
		}else if(item=='sort'){
			switch(obj[item]){
				case '评分':_data=_data.sort((a,b)=>b.score-a.score);break;
				case '时间':_data=_data.sort((a,b)=>Number(b.date.split('/')[0])-Number(a.date.split('/')[0]));break;
			}
		}else if(item=='pageNum'){
			lh=_data.length;
			var filterObj=obj[item];	
			_data=_data.slice((filterObj-1)*12,filterObj*12-1>_data.length?_data.length:filterObj*12);
		}
	};
	return [_data,lh];
}
// { Selling: '在售', type: '爱情', area: '大陆', date: '',sort:'评分' pageNum: 1 }



router.get('/home' ,async ctx=>{
	var preMovie=await  PreMovieInfoModel.find({});
	var sellingMovie=await  SellingMovieInfoModel.find({});
	var downMovie=await DownMovieInfoModel.find({});
	var prePic=await MovieModel.find({Selling:'预售'});
	var sellingPic=await MovieModel.find({Selling:'在售'});
	var downPic=await MovieModel.find({Selling:'售空'});
	if(sellingMovie) return ctx.body={state:200,data:{sellingMovie}};
	ctx.body={state:100,data:{}};
})

router
.post('/films',async ctx=>{
	// console.log(ctx.request.body)
	var preMovie=await  PreMovieInfoModel.find({});
	var sellingMovie=await  SellingMovieInfoModel.find({});
	var downMovie=await DownMovieInfoModel.find({});
	var prePic=await MovieModel.find({Selling:'预售'});
	var sellingPic=await MovieModel.find({Selling:'在售'});
	var downPic=await MovieModel.find({Selling:'售空'});
	preMovie=mergeData(preMovie,prePic);
	sellingMovie=mergeData(sellingMovie,sellingPic);
	downMovie=mergeData(downMovie,downPic);
	const postData= filterData(ctx.request.body,{preMovie,sellingMovie,downMovie});
	if(postData) return ctx.body=postData;
	return ctx.body=[];
})
.post('/films/movie',async ctx=>{
	var preMovie=await  PreMovieInfoModel.find({});
	var sellingMovie=await  SellingMovieInfoModel.find({});
	var downMovie=await DownMovieInfoModel.find({});
	var prePic=await MovieModel.find({Selling:'预售'});
	var sellingPic=await MovieModel.find({Selling:'在售'});
	var downPic=await MovieModel.find({Selling:'售空'});
	preMovie=mergeData(preMovie,prePic);
	sellingMovie=mergeData(sellingMovie,sellingPic);
	downMovie=mergeData(downMovie,downPic);
	// console.log(ctx.request.body);
	let arr=ctx.request.body.id.split('&');
	// console.log(sellingMovie)
	let _data={};
	switch(arr[3]){
		case '在售':_data=sellingMovie.filter(item=>item._doc.num===Number(arr[1]));break;
		case '预售':_data=preMovie.filter(item=>item._doc.num===Number(arr[1]));break;
		case '售空':_data=downMovie.filter(item=>item._doc.num===Number(arr[1]));break;
	}
	if(_data) return ctx.body={state:200,_data};
	ctx.body={state:100,_data:[]};
})
module.exports= router