/**
 * 路由入口
 * @date: 2016-06-15 22:51
 * @author: Xinconan<xinconan2@sina.com>
 */

module.exports = function(app){
    require("./route_alarm")(app);  //告警相关
    require("./route_weixin")(app); //微信相关
}