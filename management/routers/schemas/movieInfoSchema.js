const mongoose =require('mongoose');


const schema={
	num:{
		type:Number,
	},
	name:{
		type:String,
	},
	length:{
		type:Number,
	},
	wantWatch:{
		type:Number,
	},
	bookingOffice:{
		type:String,
	},
	introduction:{
		type:String,
	},
	director:{
		type:String,
	},
	have:{
		type:Array,
	}
}

const PreMovieInfoModel=mongoose.model('premovieinfos',new mongoose.Schema(schema));
const SellingMovieInfoModel=mongoose.model('sellingmovieinfos',new mongoose.Schema(schema));
const DownMovieInfoModel=mongoose.model('downmovieinfos',new mongoose.Schema(schema));


module.exports={
	PreMovieInfoModel,
	SellingMovieInfoModel,
	DownMovieInfoModel
}