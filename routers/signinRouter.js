const Router = require("koa-router")
const render = require("koa-art-template")
const artTemplate = require("art-template")
const UserModel = require("../models/usersModel")
const userSession = require("../middleWare/userSession")
const crypto = require("crypto")



const router = new Router()
router.get("/signin",ctx=>{
    ctx.render("./signin.art")
})

router.post("/signin",async ctx=>{
    let{username,email,password}=ctx.request.body
    let md5 = crypto.createHash("md5")
    md5.update(password)
    password = md5.digest("hex")
    let user = await UserModel.findOne({email,password})
    if(user){
        ctx.body={state:200,msg:"登陆成功"}
        ctx.session.user={name:user.username,email:user.email}   
        
    } else {
        ctx.body={state:100,msg:"登陆失败"}
    }
})


module.exports=router