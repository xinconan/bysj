/**
 * T地图相关路由
 * @date: 2016/06/18 20:48
 * @author: Xinconan<xinconan2@sina.com>
 */
var appConfig = require("../appConfig");

module.exports = function(app){
    app.get("/map",function(req,res){
        var jObject = {};
        jObject.key = appConfig.amap.key;
        res.render("map",jObject);
    });
}