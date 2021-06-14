## 1.  管理CSS文件

### 1.1 创建base.css 并粘贴以下代码

```css
@import "./normalize.css";

/*:root -> 获取根元素html*/
:root {
  /* 下面是CSS变量，CSS变量的定义方式是以-- 开头 */
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  user-select: none; /* 禁止用户鼠标在页面上选中文字/图片等 */
  -webkit-tap-highlight-color: transparent; /* webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节 */
  background: var(--color-background);
  color: var(--color-text);
  /* rem vw/vh */
  width: 100vw;
}

a {
  color: var(--color-text);
  text-decoration: none;
}


.clear-fix::after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.clear-fix {
  zoom: 1;
}

.left {
  float: left;
}

.right {
  float: right;
}

```

### 1.2 在App.vue对base.css进行引用

 ```vue
 <!-- .....省略代码.... -->
 <style>
 @import "assets/css/base.css";
 
 </style>
 ```

## 2. 对路径进行别名配置

2.1 在src下新建文件`vue.config.js`

```js
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'component': '@/component',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
```

2.2 将App.vue中的css文件引入修改

```vue
<!-- .....省略代码.... -->
<style>
@import "assets/css/base.css";
</style>
```

2.3 从其他vue cli2.0项目中拷贝一个`.editorconfig`文件放在supermall工程下

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

```

