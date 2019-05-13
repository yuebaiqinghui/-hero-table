var express = require('express')
//引入router模块
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()
app.listen(3118,function(){
    console.log('http://127.0.0.1:3118')
})
//静态托管，并虚拟路径前缀
app.use('/css',express.static('css'))
   .use('/images',express.static('images'))
   .use('/js',express.static('js'))


//模版引擎
app.engine('html',require('express-art-template'))
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)