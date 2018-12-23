const mongoose=require('mongoose');
const app=require ('./routers/app');


mongoose.connect('mongodb://localhost/cateye',err=>{
	if(err) return console.error('数据库连接失败');

	app.listen(8888, '0.0.0.0',err=>{
		if(err) return console.error('服务器开启失败');
		console.log('Server Running')
	})
})