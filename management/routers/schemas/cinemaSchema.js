const mongoose =require('mongoose');


const CinemaSchema=new mongoose.Schema({
	num:{
		type:Number,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	},
	brand:{
		type:String,
		required:true
	},
	sproom:{
		type:Array,
		required:true
	},
	area:{
		type:String,
		required:true
	},
	district:{
		type:String,
		required:true
	},
	hadmovie:{
		type:Array,
		required:true
	}
})

module.exports= mongoose.model('cinemas',CinemaSchema);