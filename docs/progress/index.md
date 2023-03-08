# 时间选择

可动态加载的进度条,支持更多自定义

## 按需引入

```js
import progress from "jan-element-components/progress";

app.use(progress);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-progress :percentage="60" isAnimation></m-progress>
    <br />
    <m-progress
      isAnimate
      status="success"
      :stroke-width="20"
      :percentage="60"
    ></m-progress>
    <br />
    <m-progress
      :time="5000"
      type="circle"
      isAnimate
      :percentage="60"
    ></m-progress>
 </div>

## 示例代码

```html
<div>
  <m-progress :percentage="60" isAnimation></m-progress>
  <br />
  <m-progress
    isAnimate
    status="success"
    :stroke-width="20"
    :percentage="60"
  ></m-progress>
  <br />
  <m-progress
    :time="5000"
    type="circle"
    isAnimate
    :percentage="60"
  ></m-progress>
</div>
```

## Props

| 属性        | 说明           | 类型    | 可选值     | 默认值 |
| :---------- | -------------- | ------- | ---------- | ------ |
| percentage  | 进度条进度     | number  | 必填       | -      |
| isAnimation | 是否有动画效果 | boolean | true/false | false  |
| time        | 动画时长(毫秒) | number  | -          | 3000   |

继承`element-plus` `progress`组件的所有属性
