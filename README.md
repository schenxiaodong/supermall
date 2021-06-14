# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 目录结构

```
supermall						项目名
    │  .browserslistrc
    │  .gitignore
    │  babel.config.js
    │  package-lock.json
    │  package.json				包管理器
    │  README.md
    │               
    ├─public
    │      favicon.ico			
    │      index.html			主页面
    │      
    └─src
        │  App.vue			
        │  main.js
        │  
        ├─assets
        │  ├─css				存放css文件
        │  └─img				存放img文件
        ├─common				存放公共资源(JS)，例如公共常量
        ├─components			组件相关文件夹
        │  ├─common				存放抽取处理的模板，可能以后其他项目会用到
        │  └─content			存放抽取处理的模板，当前项目会用到
        ├─network				网络相关文件夹
        ├─router				路由相关文件夹
        │      index.js
        │      
        ├─store					Vuex状态管理公共文件夹
        │      index.js
        │      
        └─views
            ├─category
            └─home
```

### 引入CSS

导入`normalize.css`，可以从https://github.com/necolas/normalize.css 进行下载并放入css文件夹
