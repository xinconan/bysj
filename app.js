/**
 * ����������ļ�
 * @date: 2016-06-15 22:11
 * @author: Xinconan<xinconan2@sina.com>
 */
var express = require("express");

var app = express();

var handlebars = require('express3-handlebars')
    .create({ extname:  '.hbs'  }); //����handlebars��չ��Ϊhbs
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

