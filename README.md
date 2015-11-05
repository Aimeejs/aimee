#Aimee

##官方模块
UZ构建工具定制化模块，所以最好配合UZ使用  
所有模块形式和nodejs模块相同，类CMD，包装define外壳后可以使用seajs调用  
[class](https://github.com/Aimeejs/class)  
[pm](https://github.com/Aimeejs/pm)  
[page](https://github.com/Aimeejs/page)  
[app](https://github.com/Aimeejs/app)  
[is](https://github.com/Aimeejs/is)  
[extend](https://github.com/Aimeejs/extend)

##项目
####项目开发目录
```
project                           // 项目目录
├── css
│   ├── common.less               // 公共样式
│   ├── inc                       // 与业务有关的样式模块，不被构建工具处理
│   └── lib                       // 与业务无关的样式模块，不被构建工具处理
├── images                        // 图片文件夹最终位置，构建工具会将模块图片发布到这个位置
│   └── img                       // 用于占位的图片位置
│   ├── app                       // 构建工具将会按照模块名称将其图片发布到images目录下，开发者可忽略
│   │   └── img
├── js                            // js位置，够将
│   └── dev                       // 不上线的js文件，仅用于开发环境，构建工具将会忽略
│   └── lib                       // js库文件位置
│   └── pkg                       // 构建工具发布打包后js文件的位置
├── packages                      // 包管理工具安装目录，待定
├── modules                       // 纯js模块
│   └── app
│       └── app.js
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
        ├── header.json.js        // Widget模拟数据，仅用于开发环境
        ├── header.less           // Widget样式文件
        └── img                   // Widget图片文件夹

```

<a name="a42"/>
####项目产出目录

```
dest
├── css
│   └── home.css                    // 样式文件只产出 home.css
├── images                          // 最终图片文件夹
│   ├── app
│   │   └── img
│   └── img
├── index.html                      // 入口HTML文件
├── js                              // 最终js存放目录
│   └── pkg                         // 打包js存放目录
│       ├── json.js                 // 模拟数据，仅用于测试
│       ├── lib.js                  // 库文件
│       ├── mods.js                 // 纯js模块
│       ├── page.js                 // widget && pages
│       └── templates.js            // HTML模板
```


####Widget开发
[app](https://github.com/Aimeejs/app)  


####虚拟页开发
[page](https://github.com/Aimeejs/page)  
