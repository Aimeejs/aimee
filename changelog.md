#更新历史

v2.0.1
---
Fixbug 修正注册后不能正确挂载非``widget-app``的问题

v2.0.0
---
* ES6语法重构
* 修正在aimee.app中使用Zepto框架的问题
* Fixbug 修正aimee.config没有正确实例化的问题

v1.1.0
---
* 新增``aimee.$``
* 新增``aimee.create``

``aimee.$``和``aimee.create``支持采用[emmet](https://github.com/Aimeejs/emmet)的方式创建dom  
``aimee.$``输出jQuery或Zepto对象，``type: Zepto | jQuery``  
``aimee.create``输出原生dom结构，``type: String``  

```js
$('body').append(aimee.$('.wrapper>p{123}'))
// or
$('body').append(aimee.create('.wrapper>p{123}'))
```
===>
```html
<body>
    <div class="wrapper">
        <p>123</p>
    </div>
</body>
```


v1.0.5
---
* 优化依赖
* 优化说明文档

v1.0.4
---
优化```aimee.reg```方法，全局模块默认插入全局容器```.lincowebapp-wrapper```，```.lincowebapp-wrapper```为空时插入```body```   
fix bug: 修复因app api升级造成的bug

v1.0.3
---
开放```aimee```对象为全局变量

v1.0.2
---
* 新增定义虚拟app方法 ```aimee.define```
虚拟app可以像真实app一样被页面调用 ```page.exports(id)```
* 虚拟app对外开放接口 ```aimee.virtualMap```
可以通过```aimee.virtualMap.id```访问虚拟app，
虚拟app需要在```router.action()```启动之前生效，才能保证被虚拟页访问到

**创建虚拟组件app**
```javascript
// 定义虚拟组件newHeader
aimee.define('newHeader', function(){
    var Header = require('header');
    // 以Header为原型创建新的虚拟app
    var NewHeader = Header.create();
    var Nav = require('nav');
    var nav = new Nav;
    // 定义虚拟app预处理
    NewHeader.fn.prerender = function(app){
        app.skin('white').addClass('fadeIn');
        app.find('h1').html('');
        app.find('.icenter').remove();
        app.getApp().append(nav.getApp());
    }
    return NewHeader;
});
```

**虚拟页调用虚拟app**
```javascript
var page, Page;

Page = require('page');
page = new Page;
page.extend({
    name: 'home',
    template: require('./home.jade'),
    prerender: function(data, thisPage){
        // 和调用真实app一样调用虚拟app
        this.exports('newHeader')
    }
});

module.exports = page;

```


v1.0.1
---
* 更新依赖列表
* 更新说明文档


v1.0.0
---
创建aimee  
aimee是Aimeejs框架的核心模块，贯穿Aimeejs框架始终
