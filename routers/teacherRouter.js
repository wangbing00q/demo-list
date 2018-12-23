const Router = require('koa-router')
const render = require("koa-art-template")
const artTemplate = require("art-template")
const path = require("path")
const TeacherModel = require("../models/teacher")
const fs = require("fs")
const Object = require("mongoose").Types.ObjectId

const router = new Router()


router.get("/teacher/list",async ctx=>{
    let teachers=await TeacherModel.find({})
    ctx.render("./teacher/list.art",{teachers})
})


router.get("/teacher/add",async ctx=>{
    ctx.render("./teacher/add.art")
})




router.post("/teacher/add",async ctx=>{
    var file = ctx.request.files["photo"];
    var filename = Date.now()+file.name
    var dest = path.join(__dirname,"../public/uploads/photo"+filename)
    var rs = fs.createReadStream(file.path)
    var ws = fs.createWriteStream(dest)
    rs.pipe(ws)
    var data = ctx.request.body
    data.photo = "uploads/photo"+filename

    var teacher = await new TeacherModel(data).save()
    if(teacher){
        ctx.body={state:200,msg:"添加成功"}
    }else{
        ctx.body={state:401,msg:"添加失败"}
    }

})

router.post("/teacher/del",async ctx=>{
    let {_id} = ctx.request.body
    _id=Object(_id.slice(1,-1))
    let photoStr=await TeacherModel.find({_id:_id})
    photoStr=photoStr[0].photo.slice(8)
    fs.unlinkSync(path.join(__dirname,"../public/uploads",photoStr),err=>{
        if(err) return console.log("删除照片失败");
        console.log("删除照片成功");
    })


    let delMsg=await TeacherModel.deleteOne({_id:_id})
    if(delMsg.n&&delMsg.ok){
        ctx.body={state:200,msg:"删除成功"}
    }else{
        ctx.body={state:501,msg:"删除失败"}
    }
})

router.get("/teacher/edit",async ctx=>{
    var query=ctx.request.query._id;
    let _id=Object(query)
    let data = await TeacherModel.findOne({_id:_id})
    ctx.render("./teacher/edit",{data})
})

router.post("/teacher/edit",async ctx=>{
    var data=ctx.request.body
    const file = ctx.request.files.photo
    var filename = "photo"+Date.now()+file.name
    var dest = path.join(__dirname, "../public/uploads/"+filename);
  
    if(file.name){
        var rs=fs.createReadStream(file.path)
        var ws=fs.createWriteStream(dest)
        rs.pipe(ws)
        data._id=Object(data._id)
        let thisData = await TeacherModel.findOne({_id:data._id})
        let thisDest = path.join(__dirname,"../public/"+thisData.photo)
        fs.unlinkSync(thisDest,err=>{
            throw err
        })
        data.photo = "uploads/" + filename;
    }
    let condition=ctx.request.body._id;
    condition=Object(condition)
    
    let Sdata = await TeacherModel.updateOne({_id:condition},{$set:{...data}})
    if(Sdata.n&&Sdata.ok){
        ctx.body={state:200,msg:"修改成功"}
    }else{
        ctx.body={state:901,msg:"修改失败"}
    }
})


module.exports=router

