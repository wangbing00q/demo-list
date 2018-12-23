const Router = require("koa-router")
const render = require("koa-art-template")
const artTemplate = require("art-template")
const UserModel = require("../models/usersModel")
const crypto =require("crypto")

const router = new Router()

router.get("/signup",ctx=>{
    ctx.render("./signup")
})

router.post("/signup",async ctx=>{
    let {username,email,password,repasswd}=ctx.request.body
    if(password != repasswd){
        ctx.body={state:103,msg:"密码不一致"}
        return
    }
    var user=await UserModel.findOne({username})
    if(user){
        ctx.body={state:101,msg:"用户名已存在"}
        return
    }
    user=await UserModel.findOne({email})
    if(user){
        ctx.body={state:102,msg:"注册邮箱已存在"}
        return
    }
    let md5=crypto.createHash("md5")
    md5.update(password)
    password = md5.digest("hex")
    ctx.body={state:200,msg:"注册成功"}
    user=await new UserModel({username,email,password}).save()
})

module.exports=router