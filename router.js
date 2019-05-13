var express = require('express')
//引入英雄控制器模块
var heroController = require('./heroController')

var router = express.Router()
//获取动态首页
router.get('/', heroController.getIndexPage)
//获取增加英雄页面
      .get('/add', heroController.getAddPage)
// - 实现文件上传:type:post   url:/uploadFile
      .post('/uploadFile',heroController.uploadFile)
// - 实现用户数据的新增:type:post   url:/add
      .post('/add',heroController.doAdd)
// - 获取编辑动态页面:type:get    url:/edit
      .get('/edit',heroController.getEditPage)
// - 实现用户编辑操作:type:post   url:/edit
      .post('/edit',heroController.doEdit)
// - 实现删除操作:type:get    url:/del
      .get('/del',heroController.doDel)

//暴露router
module.exports = router