const Koa = require("koa")
const mongoose = require("mongoose")
const render = require("koa-art-template")
const path = require("path")
const homeRouter = require("./routers/homeRouter")
const signinRouter= require("./routers/signinRouter")
const signupRouter= require("./routers/signupRouter")
const teacherRouter = require("./routers/teacherRouter")
const courseRouter = require("./routers/courseRouter")
const static = require("koa-static")
const koaBody = require("koa-body")
const session = require("koa-session")
const app = new Koa()
app.keys=["wangbingbaba"]

const CONFIG={
    key:'koa:sess',
    maxAge:24*60*60*1000
}

app.use(session(CONFIG,app))


app.use(koaBody({
    multipart: true
  }))
app.use(static(path.join(__dirname,"public")))

render(app,{
    root:path.join(__dirname,"views")
})



mongoose.connect("mongodb://localhost/tm",err=>{
    if(err) return console.log("连接数据库失败！");
    app.listen(8888,()=>{
        console.log("Server Running!");
    })
})


app.use(homeRouter.routes())
app.use(homeRouter.allowedMethods())

app.use(signinRouter.routes())
app.use(signinRouter.allowedMethods())

app.use(signupRouter.routes())
app.use(signupRouter.allowedMethods())

app.use(teacherRouter.routes())
app.use(teacherRouter.allowedMethods())

app.use(courseRouter.routes())
app.use(courseRouter.allowedMethods())