/**
 * Created by XINCONAN on 2016/6/16.
 */
/* 模板页面全局参数 */
function rendParams(req, res, next) {
    //请求的主机名(以此来决定所加载的css)
    //xinconan.ngrok.cc生产环境，均显示合并后的css
    res.locals.proEnvironment = !!(req.hostname.indexOf('xinconan.ngrok.cc') != -1 );

    next();
}

module.exports = {
    rendParams:rendParams
}