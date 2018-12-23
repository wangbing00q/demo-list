const Router = require("koa-router")
const render = require("koa-art-template")
const artTemplate = require("art-template")
const CourseModel = require("../models/course")
const Object = require("mongoose").Types.ObjectId

const router = new Router()

router.get("/course/list",async ctx=>{
    let courses = await CourseModel.find({})
    ctx.render("./course/list.art",{courses})
})

router.get("/course/add",ctx=>{
    ctx.render("./course/add.art")
})

router.post("/course/add",async ctx=>{
   let data = ctx.request.body
   let dataSave = await CourseModel(data).save()
   if(dataSave){
       ctx.body={state:200,msg:"添加成功"}
   }else{
       ctx.body={state:701,msg:"添加失败"}
   }
})

router.post("/course/del",async ctx=>{
    let {_id}=ctx.request.body
    _id=Object(_id)
    let data = await CourseModel.deleteOne({_id:_id})
    if(data.n&&data.ok){
        ctx.body={state:200,msg:"删除成功"}
    }else{
        ctx.body={state:801,msg:"删除失败"}
    }
})

router.get("/course/edit",async ctx=>{
    let {_id}=ctx.request.query
    _id = Object(_id)
    let [data] = await CourseModel.find({_id:_id})
    ctx.render("./course/edit.art",{data})
})

router.post("/course/edit",async ctx=>{
    var condition = ctx.request.body._id
    let data = ctx.request.body
    delete data._id
    condition=Object(condition.slice(1,-1))
    let res = await CourseModel.updateOne({_id:condition},{$set:{...data}})

    if(res.n&&res.ok){
        ctx.body={state:200,msg:"修改成功"}
    }
})
module.exports=router


