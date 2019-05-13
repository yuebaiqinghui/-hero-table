var datamodules = require('./datamodule')
var formidable = require('formidable')
var path = require('path')
var myurl = require('url')
//获取首页
exports.getIndexPage = (req, res) => {
    datamodules.getAllData((err, data) => {
        if (err) {
            res.end(err)
        } else {
            res.render(__dirname + '/heros_index.html', {
                heros: data
            })
        }
    })
}
//获取新增页面
exports.getAddPage = (req, res) => {
    res.render(__dirname + "/add.html")
}
//文件上传
exports.uploadFile = (req, res) => {
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8'
    form.uploadDir = __dirname + '/images'
    form.keepExtensions = true
    form.parse(req, function (err, fileds, files) {
        if (err) {
            res.json({
                code: 201,
                msg: '上传失败'
            })
        } else {
            // console.log(files) 
            var filename = path.basename(files.img.path)
            res.json({
                code: 200,
                msg: '上传成功',
                img: filename
            })
        }
    })
}
//新增英雄
exports.doAdd = (req, res) => {
    datamodules.addHeros(req.body, err => {
        if (err) {
            res.json({
                code: 201,
                msg: '添加失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '添加成功'
            })
        }
    })
}
//获取编辑页面
exports.getEditPage = (req,res) => {
    var id = myurl.parse(req.url,true).query.id
    datamodules.getHeroById(id,(err,data) => {
        if(err){
            res.end('404')
        }else{
            res.render(__dirname+'/edit.html',data)
        }
    })
}
//实现编辑
exports.doEdit = (req,res) => {
    datamodules.editHeroById(req.body,err => {
        if(err){
            res.json({
                code:201,
                msg:'编辑失败'
            })
        }else{
            res.json({
                code:200,
                msg:'编辑成功'
            })
        }
    })
}
//实现删除
exports.doDel = (req,res) => {
    var id = myurl.parse(req.url,true).query.id
    datamodules.deleteHeroById(id,err => {
        if(err){
            res.end('err')
        }else{
            res.redirect(301,'/?t='+ new Date())
        }
    })
}