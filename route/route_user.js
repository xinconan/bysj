/**
 * 用户相关路由
 * @date: 2016/06/18 21:45
 * @author: Xinconan<xinconan2@sina.com>
 */

module.exports = function(app){
    app.get("/login",function(req,res){
        res.render("login");
    });
}