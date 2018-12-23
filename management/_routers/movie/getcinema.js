const Router=require('koa-router');
const path=require('path')
const MovieModel=require ('../../routers/schemas/movieSchema');
const CinemaModel=require ('../../routers/schemas/cinemaSchema');

const mongoose=require('mongoose');


const router =new Router();
function filterData(obj,data){
	// console.log(data.sellingMovie);
	let _data=data;
	// let lh=0;
	// console.log(obj['Selling']);
	for(var item in obj){
		if(item=='cinemasSpecial'){
			if(obj[item]!=''){
				var filterObj=obj[item];
				_data=_data.filter(item=>{
					var flag=false;
					for(var i=0;i<item.sproom.length;i++){
						if(item.sproom[i]==filterObj){
							flag=true;
							break;
						}
					};
					return flag;
				})
			};
			// console.log(_data.length);
		}else if(item=='cinemasBrand'){
			if(obj[item]!=''){
				var filterObj=obj[item];
				_data=_data.filter(item=>(item.brand==filterObj))
			}
			// console.log(_data.length);
		}else if(item=='cinemasAdministrative'){
			if(obj[item]!=''){
				var filterObj=obj[item];	
				_data=_data.filter(item=>(item.district==filterObj))
			}
		}
	};
	return [_data];
}
// { cinemasCity: '哈尔滨',
//   cinemasBrand: null,
//   cinemasAdministrative: null,
//   cinemasSpecial: null }


router
.post('/cinemas',async ctx=>{
	// console.log(ctx.request.body);
	// const data=CinemaModel.find({});
	let data=[]
	switch(ctx.request.body.cinemasCity){
		case '哈尔滨':data=[...(await CinemaModel.find({area:'哈尔滨'}))];break;
		case '北京':data=[...(await CinemaModel.find({area:'北京'}))];break;
	};
	// console.log(_data);
	const postData=filterData(ctx.request.body,data);
	if(postData) return ctx.body={state:200,postData};
	return ctx.body={state:100,postData:[]};
})
.post('/getcinemamovie',async ctx=>{
	// console.log(ctx.request.body);
	const num=ctx.request.body.cinemasNum;
	let res=await CinemaModel.findOne({num});
	const{hadmovie}=res;
	let _res=[];
	for(var i=0;i<hadmovie.length;i++){
		var item=hadmovie[i].split('-');
		var _data=await MovieModel.findOne({num:item[0]});
		_res.push(_data);
	}	
	if(res&&_res) return ctx.body={state:200,postData:{_res,res}};

	return ctx.body={state:200,postData:{}};
})

module.exports=router