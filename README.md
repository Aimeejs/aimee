#Aimee
开发框架  
App开发 [app](http://aimee.ilinco.com/static/sage/?name=app&version=last#/app)  
虚拟页开发 [page](http://aimee.ilinco.com/static/sage/?name=page&version=last#/app)  
路由注册 [router](http://aimee.ilinco.com/static/sage/?name=router&version=last#/app)  

#### Aimee框架目录规范
```
project                           // 项目目录
├── css
│   ├── base.less                 // Less Mixin
│   ├── common.less               // 公共样式
│   └── lib                       // 此目录不被构建工具处理
├── images                        // 图片文件夹最终位置，构建工具会将模块图片发布到这个位置
│   └── img                       // 用于占位的图片位置
│   ├── app                       // 构建工具将会按照模块名称将其图片发布到images目录下，开发者可忽略
│   │   └── img
├── index.html                    // 入口文件
├── js                            // js位置
│   └── dev                       // 不上线的js文件，仅用于开发环境，构建工具将会忽略
│   └── lib                       // js库文件位置
│   └── pkg                       // 构建工具发布打包后js文件的位置
├── modules                       // 包管理工具安装目录
├── pages                         // 页面
│   └── init.js                   // 页面入口js文件，require('init')
│   └── home
│       ├── home.jade             // 页面模板文件
│       ├── home.js               // 页面js文件
│       └── home.json.js          // 页面模拟数据，仅用于开发环境
└── widget
    └── header                    // Widget Ui模块
        ├── header.jade           // Widget模板文件
        ├── header.js             // Widget js文件
        ├── header.json.js        // Widget模拟数据
        ├── header.less           // Widget样式文件
        └── img                   // Widget图片文件夹

```

<a name="a42"/>
#### Aimee项目经过UZ构建之后的产出目录

```
dest
├── css
│   └── home.css                    // 样式文件只产出 home.css
├── images                          // 最终图片文件夹
│   ├── app
│   │   └── img
│   └── img
├── index.html                      // 入口文件
├── js                              // 最终js存放目录
│   └── pkg                         // 打包js存放目录，打包规则可以自定义
```

#### Aimee全局模块注册
```js
// In init.js
aimee
    .reg('zepto')
    .reg('loading')
    .reg('autoscreen')
    .reg('header' [, data])
```
