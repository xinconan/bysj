/**
 * 主程序入口文件
 * @date: 2016-06-15 22:11
 * @author: Xinconan<xinconan2@sina.com>
 */
var express = require("express");

var app = express();

var handlebars = require('express3-handlebars')
    .create({ extname:  '.hbs'  }); //设置handlebars扩展名为hbs
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

