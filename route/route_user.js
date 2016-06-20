/**
 * 用户相关路由
 * @date: 2016/06/18 21:45
 * @author: Xinconan<xinconan2@sina.com>
 */
var OAuth = require("../controllers/weixin/wx_oauth");
var appConfig = require("../appConfig");

module.exports = function(app){
    app.get("/login",function(req,res){
        var code = req.query.code;
        if(code){
            var jObject = {};
            jObject.code = code;
            OAuth.getAccessToken(code,function(err,result){
                if(err){
                    console.log("error")
                }
                console.log(result);
                var accessToken = result.data.access_token;
                var openid = result.data.openid;
                OAuth.getUser(appConfig.weixin.openid,function(err,result){
                    jObject.userInfo = result;
                    res.render("login",jObject);
                });
            });
        }else{
            res.render("login");
        }


    });
}