/**
 * Created by XINCONAN on 2016/6/17.
 */
var wx = require("../controllers/weixin/wx");

module.exports = function(app){
    app.get("/wechat",wx.activate);
    app.post("/wechat",wx.reply);
}