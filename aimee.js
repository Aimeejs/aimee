/**
 * Aimee for Aimeejs
 * Author by gavinning
 * Homepage https://github.com/Aimeejs/aimee
 */

var aimee = {};
var config = {};

aimee.name = 'aimee';
aimee.version = '1.0.2';
aimee.is = require('is');
aimee.guid = require('guid');
aimee.extend = require('extend');
aimee.config = require('config');
aimee.router = require('router');
aimee.Class = require('class');
// 存储全局app模块
aimee.app = {};
// 存储全局虚拟模块
aimee.virtualMap = {};

// 定义虚拟app
aimee.define = function(id, fn){
    var app = fn();
    app.fn.name = id;
    aimee.virtualMap[id] = app;
}

// 注册全局Widget-app模块
aimee.reg = function(name, id){
    var app, App;
    var pm = require('pm');
    var place = aimee.config.get('app.place');

    if(!id){
        id = name;
    }

    // 检查id是否为Widget-app
    typeof id === 'string' ?
        App = require(id):
        App = id;

    // 检查App是否是widget-app
    // eg: autoscreen
    if(!App.aimee){
        return this;
    }

    // 全局Widget-app全局唯一，所以返回实例即可
    app = new App;

    // 查找是否已注册占位符
    if(place[name]){
        app.init().render(place[name])
    }

    // 检查是否存在相应规则的占位符
    // 没有占位符则默认插入到body
    else{
        var stringId = aimee.config.get('app.renderString') + name;
        var isExist = !!document.querySelector(stringId);
        isExist ?
            app.init().render(stringId):
        app.init().appendTo('body');
    }

    // 注册到aimee.app
    aimee.app[name] = app;

    return this;
}

// 设置全局config数据模型
aimee.config.init({
    // 当前环境
    env: 'online',

    // 全局app
    app: {
        renderString: '#lincoapp-id-',
        // 注册全局app的位置信息
        place: {
            header: '#lincoapp-id-header',
            footer: '#lincoapp-id-footer'
        }
    },

    // Item
    selected: 'selected',
    _selected: '.selected'
})

// 获取全局配置
aimee.getConfig = function(){
    return aimee.config.get();
}

module.exports = aimee;
