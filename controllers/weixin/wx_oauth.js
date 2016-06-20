/**
 * 微信OAuth
 * @date: 2016/06/20 22:40
 * @author: Xinconan<xinconan2@sina.com>
 */
var appConfig = require("../../appConfig");
var OAuth = require("wechat-oauth");
var client = new OAuth(appConfig.weixin.appid,appConfig.weixin.appsecret);

module.exports = client;