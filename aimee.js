/**
 * Aimee for Aimeejs
 * Author by gavinning
 * Homepage https://github.com/Aimeejs/aimee
 */

var aimee = {};
var Config = require('config').Config;

aimee.name = 'aimee';
aimee.is = require('is');
aimee.guid = require('guid');
aimee.extend = require('extend');
aimee.router = require('router');
aimee.create = require('emmet');
aimee.Class = require('class');
aimee.config = new Config;

// 存储全局app模块
aimee.app = {};
// 存储全局虚拟模块
aimee.virtualMap = {};

// 包装为Zepto对象
aimee.$ = function(string){
    return $(aimee.create(string))
}

// 定义虚拟app
aimee.define = function(id, fn){
    var app = fn();
    app.fn.name = id;
    aimee.virtualMap[id] = app;
}

// 注册全局Widget-app模块
aimee.reg = function(id, data, fn){
    var app, App;
    var pm = require('pm');
    var place = aimee.config.get('app.place');

    fn = fn || function(){};

    // this.reg(name, fn)
    if(typeof data === 'function'){
        fn = data;
        data = null;
    }

    try{
        App = require(id)
    }
    catch(e){
        if(aimee.virtualMap[id]){
            App = App = aimee.virtualMap[id]
        }
        else{
            return this
        }
    }

    // 检查App是否是widget-app
    // eg: autoscreen
    if(!App.aimee){
        return this;
    }

    // 全局Widget-app全局唯一，所以返回实例即可
    app = new App;

    // 查找是否已注册占位符
    if(place[id]){
        app.init(data).render(place[id])
    }

    // 检查是否存在相应规则的占位符
    // 没有占位符则默认插入到body
    else{
        var wrapper = $('.lincowebapp-wrapper');
        var stringId = aimee.config.get('app.renderString') + id;
        var isExist = !!document.querySelector(stringId);
        isExist ?
            app.init(data).render(stringId):
            wrapper.length ?
                app.init(data).compile().appendTo(wrapper):
                app.init(data).compile().appendTo('body');
    }

    // 全局模块默认隐藏
    app.hide()

    // 注册到aimee.app
    if(aimee.app[id] && data && data.id){
        aimee.app[data.id] = app
    }
    else{
        aimee.app[id] = app;
    }

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

module.exports = window.aimee = aimee;
