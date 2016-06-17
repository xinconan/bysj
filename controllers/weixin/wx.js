/**
 * Created by XINCONAN on 2016/6/17.
 */
var wechat = require("wechat");
var crypto = require('crypto');
var appConfig = require("../../appConfig");


function sha1(str) {
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}

/* 激活开发者模式（接入微信服务器） */
var activate = function (req, res) {
    var hosId = req.params.hosId;
    var token = appConfig.weixin.token ? appConfig.weixin.token : '';
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    var tmpArr = [nonce, timestamp, token];
    tmpArr.sort();
    var tmpStr = tmpArr.join('');
    tmpStr = sha1(tmpStr);
    if (tmpStr == signature) {
        res.send(echostr);
    } else {
        res.send("Bad Token!");
    }
};

//消息回复
var reply = wechat(appConfig.weixin, wechat
    .text(function (message, req, res, next) {
        //用户发送文本消息
        res.reply(message.Content); //
    })
    .event(function (message, req, res, next) {
        switch (message.Event) {
            case 'unsubscribe':
                console.log("用户" + message.FromUserName + "取消关注");
                res.reply('');
                break;
            case 'subscribe':
                if (message.EventKey) {
                    console.log('用户 ' + message.FromUserName + ' 扫描带参二维码 ' + message.EventKey + ' 并关注了')
                } else {
                    console.log('用户 ' + message.FromUserName + ' 扫描官方二维码关注了公众号');
                }
                res.reply("欢迎关注监测系统公众号。您可以点击登录进行系统账号绑定！");
                break;
            case 'SCAN':
                console.log('已关注的用户 ' + message.FromUserName + ' 扫描带参二维码 ' + message.EventKey + ' 进入了微信');
                res.reply('');
                break;
            case 'VIEW':
                //console.log("用户" + message.FromUserName + "点击菜单");
                res.reply('');
                break;
        }
    })
    .image(function (message, req, res, next) {
        //todo
        res.reply('');
    })
    .voice(function (message, req, res, next) {
        //todo
        res.reply('');
    })
    .video(function (message, req, res, next) {
        //todo
        res.reply('');
    })
    .location(function (message, req, res, next) {
        //todo
        res.reply('');
    })
    .link(function (message, req, res, next) {
        //todo
        res.reply('');
    })
);

module.exports = {
    activate:activate,
    reply:reply
}