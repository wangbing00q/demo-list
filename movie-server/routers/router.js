const Router = require("koa-router")
const router = new Router()
const newsModel = require("../models/hot");
const hotModel = require("../models/news")
const prevideoModel = require("../models/prevideo")
const hotvideoModel = require("../models/hotvideo")
const newphotoModel = require("../models/newphoto")
const xinwenModel = require("../models/xinwen")
const yugaopianModel=require("../models/yugaopian")
const photopageModel=require("../models/photopage")

router.post("/hotpage", async ctx => {
    if (ctx.request.body.newnews == 'newnews') {
        var newnews = await newsModel.find({});
    }
    if (ctx.request.body.hotnews == 'hotnews') {
        var hotnews = await hotModel.find({})
    }
    if (ctx.request.body.previewvideos == 'previewvideos') {
        var previewvideos = await prevideoModel.find({})
    }
    if (ctx.request.body.hotvideos == 'hotvideos') {
        var hotvideos = await hotvideoModel.find({})
    }
    if (ctx.request.body.newphotos == 'newphotos') {
        var newphotos = await newphotoModel.find({})
    }
    if (ctx.request.body.xinwenzixuns == 'xinwenzixuns') {
        var xinwenzixuns = await xinwenModel.find({})
    }
    if (ctx.request.body.yugaopians == 'yugaopians') {
        var yugaopians = await yugaopianModel.find({})
    }
    if (ctx.request.body.photopages == 'photopages') {
        var photopages = await photopageModel.find({})
    }
    ctx.body = { newnews: newnews, hotnews: hotnews, previewvideos: previewvideos, hotvideos: hotvideos, newphotos: newphotos, xinwenzixuns: xinwenzixuns,yugaopians:yugaopians ,photopages:photopages}
});
module.exports = router