/**
 * Created by Xinconan on 2016/6/16.
 */
module.exports = function(app){
    app.get("/alarms",function(req,res){
        res.render("alarms");
    });
    app.get("/alarm/:alarmId",function(req,res){
        var jObject = {};
        jObject.alarmId = req.params.alarmId;
        res.render("alarm",jObject);
    })
};