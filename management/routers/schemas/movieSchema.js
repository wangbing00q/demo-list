const mongoose=require('mongoose');


const AddMocieSchema=new mongoose.Schema({
	num:{
		type:Number,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	is3DIMAX:{
		type:String,
		required:true
	},
	Selling:{
		type:String,
		required:true
	},
	score:{
		type:Number,
		required:true
	},
	type:{
		type:Array,
		required:true
	},
	area:{
		type:String,
		required:true
	},
	date:{
		type:String,
		required:true
	},
	pic:{
		type:String,
		required:true
	}
})

module.exports=mongoose.model('movielists',AddMocieSchema);