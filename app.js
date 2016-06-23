/**
 * 主程序入口文件
 * @date: 2016-06-15 22:11
 * @author: Xinconan<xinconan2@sina.com>
 */
var express = require("express");
var path = require("path");
var http = require("http");
var appConfig = require("./appConfig");
var serv_auth = require("./controllers/service/serv_auth");
var helper = require("./public/components/helper");
var schedule = require("./schedule");

var app = express();
app.set('port', process.env.PORT || appConfig.port);

var exphbs = require('express3-handlebars');
app.engine('hbs', exphbs({
    helpers:helper,
    layoutsDir: __dirname + '/layout',
    defaultLayout: 'layout',
    extname:  '.hbs'  //设置handlebars扩展名为hbs
}));
app.set('view engine', 'hbs');

/* 静态文件目录 */
var staticFileCacheTime = 3600000;
app.use(express.static(path.join(__dirname, 'public/static'), {maxAge: staticFileCacheTime}));

/* 挂载view页面全局参数 */
app.use('/:type', serv_auth.rendParams);

app.use("/m",function(req,res){
    res.render('index');
});

process.on('uncaughtException', function (err) {
    console.error(err);
    console.error(err.stack);
});

require("./route/route")(app);

// 404
app.get('*', function (req, res) {
    console.error("bysj 404,地址：" + req.originalUrl);
    res.status(404).render('page_404', {
        title: 'No Found'
    })
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('系统已经启动 ，端口 ：' + app.get('port'));
});