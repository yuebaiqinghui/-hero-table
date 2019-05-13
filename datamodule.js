var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lianxi'
})


exports.getAllData = callback => {
    connection.query('SELECT * FROM heros where isdelete = 0',function(err,results){
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}

exports.addHeros = (obj,callback) => {
    var sql = 'insert into heros values(null,?,?,?,0)'
    connection.query(sql,[obj.name,obj.gender,obj.img],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

exports.getHeroById = (id,callback) => {
    var sql = 'SELECT * FROM heros where id = ? and isdelete = 0'
    connection.query(sql,[id],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null,results[0])
        }
    })
}

exports.editHeroById = (obj,callback) => {
    var sql = 'update heros set name=?,gender=?,img=? where id = ?'
    connection.query(sql,[obj.name,obj.gender,obj.img,obj.id],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

exports.deleteHeroById = (id,callback) => {
    var sql = 'update heros set isdelete = 1 where id = '+id
    connection.query(sql,[id],(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}