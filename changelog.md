#更新历史

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
