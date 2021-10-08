'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    res.json("Berhasil")
};

exports.tampilkansemua = function(req,res){
    connection.query('SELECT * FROM user', function (error,rows,fields){
        if(error){
            consoles.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};