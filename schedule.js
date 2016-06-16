/**
 * 定时任务
 * @date: 2016/06/16 22:24
 * @author: Xinconan<xinconan2@sina.com>
 */
var schedule = require("node-schedule");

var rule = new schedule.RecurrenceRule();
var times = [0,15,30,45];
rule.second = times;

module.exports = schedule.scheduleJob(rule,function(){
    //TODO:定时进行远程数据获取
});
