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

router.post('/home',async ctx=>{
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
	// console.log(downMovie);
	ctx.body={state:200,postData:{preMovie,sellingMovie,downMovie}};
})



module.exports= router