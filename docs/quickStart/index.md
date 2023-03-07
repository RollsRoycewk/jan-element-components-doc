# 快速开始

## 须知

因为我们当前组件库是基于我`element-plus`二次封装的,所以在项目当中必须确保已经安装和正确使用了`elemet-plus`,[element-plus 安装使用指南](https://element-plus.org/en-US/guide/installation.html)

## 使用指南

1.在项目目录里安装 `jan-element-components`

```js
1.npm 安装: `npm i -S jan-element-components`
2.cnpm 安装: `cnpm i -S jan-element-components`
3.yarn 安装: `yarn add -S jan-element-components` 2.在`main.ts`文件当中写入以下代码:
```

2.全局引入
在`main.ts`文件当中写入以下代码:

```js
import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import JanUI from "jan-element-components";
import "jan-element-components/style.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(JanUI);
```

3.按需引入

```js
import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import chooseIcon from "jan-element-components/chooseIcon";
import "jan-element-components/chooseIcon/style.css";
import chooseArea from "jan-element-components/chooseArea";
// ...

const app = createApp(App);
app.use(ElementPlus);
app.use(chooseIcon);
app.use(chooseArea);
// ...
```

4.使用
具体用法参照以下文档了解具体使用方式
