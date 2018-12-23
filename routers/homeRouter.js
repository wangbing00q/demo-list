const Router = require("koa-router")
const render = require("koa-art-template")
const artTemplate = require("art-template")
const userSession = require("../middleWare/userSession")



const router = new Router()

router.get("/",userSession,ctx=>{
ctx.render("./home.art")
})

module.exports=router