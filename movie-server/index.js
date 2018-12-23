const Koa = require('koa')
const KoaBody = require('koa-body')
const mongoose =require('mongoose')
const router = require('./routers/router')
const koaCors =require('koa-cors')

const app = new Koa()

app.use(koaCors())
app.use(KoaBody({
    multipart: true
  }))


mongoose.connect("mongodb://localhost/yinlili",err=>{
    if(err) return console.log("连接数据库失败！");
    app.listen(3000,()=>{
        console.log("Server Running!");
    })
})

app.use(router.routes())
app.use(router.allowedMethods())