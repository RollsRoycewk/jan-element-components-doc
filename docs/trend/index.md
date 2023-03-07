# 趋势标记

表示上升或者下降趋势,支持多种自定义

## 按需引入

```js
// main.ts
import trend from "jan-element-components/trend";
import "jan-element-components/trend/style.css";

app.use(trend);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
   <div>
    <div class="flex">
      <div><m-trend text="营业额"></m-trend></div>
      <div><m-trend text="销售额" type="down"></m-trend></div>
    </div>
    <br/>
    <div class="flex">
      <div><m-trend text="营业额" upIconColor="blue"></m-trend></div>
      <div>
        <m-trend text="销售额" type="down" downIconColor="#123456"></m-trend>
      </div>
    </div>
    <div class="flex">
     <div><m-trend text="营业额">传入插槽数据</m-trend></div>
     <div><m-trend text="不传入"></m-trend></div>
    </div>
    <div class="flex">
        <m-trend text="营业额" reverseColor></m-trend>
        <m-trend text="销售额" type="down" reverseColor></m-trend>
    </div>
    <div class="flex">
        <m-trend text="营业额" upTextColor="blue"></m-trend>
        <m-trend text="销售额" type="down" downTextColor="orange  "></m-trend>
    </div>
    <div class="flex">
        <m-trend text="营业额" upIcon="CaretTop"></m-trend>
        <m-trend text="销售额" type="down" downIcon="CaretBottom"></m-trend>
    </div>

  </div>
 </div>

 <style>
.flex {
  display: flex;
}

div {
  margin-right: 10px;
}
 </style>

## 代码示例

```html
<div>
  <div class="flex">
    <div><m-trend text="营业额"></m-trend></div>
    <div><m-trend text="销售额" type="down"></m-trend></div>
  </div>
  <br />
  <div class="flex">
    <div><m-trend text="营业额" upIconColor="blue"></m-trend></div>
    <div>
      <m-trend text="销售额" type="down" downIconColor="#123456"></m-trend>
    </div>
  </div>
  <div class="flex">
    <div><m-trend text="营业额">传入插槽数据</m-trend></div>
    <div><m-trend text="不传入"></m-trend></div>
  </div>
  <div class="flex">
    <m-trend text="营业额" reverseColor></m-trend>
    <m-trend text="销售额" type="down" reverseColor></m-trend>
  </div>
  <div class="flex">
    <m-trend text="营业额" upTextColor="blue"></m-trend>
    <m-trend text="销售额" type="down" downTextColor="orange  "></m-trend>
  </div>
  <div class="flex">
    <m-trend text="营业额" upIcon="CaretTop"></m-trend>
    <m-trend text="销售额" type="down" downIcon="CaretBottom"></m-trend>
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  div {
    margin-right: 10px;
  }
</style>
```

## Props

| 属性          | 说明                 | 类型    | 可选值     | 默认值     |
| :------------ | -------------------- | ------- | ---------- | ---------- |
| type          | 上升趋势还是下降趋势 | up/down | up/down    | up         |
| upIcon        | 上升趋势显示的图标   | string  | -          | ArrowUp    |
| downIcon      | 下降趋势显示的图标   | string  | -          | ArrowDown  |
| text          | 趋势显示的文字       | string  | -          | -          |
| reverseColor  | 翻转颜色             | boolean | true/false | false      |
| upIconColor   | 上升趋势图标颜色     | string  | -          | #f5222d    |
| downIconColor | 下降趋势的图标颜色   | string  | -          | #52c41a    |
| upTextColor   | 上升趋势文字颜色     | string  | -          | rgb(0,0,0) |
| downTextColor | 下降趋势的文字颜色   | string  | -          | rgb(0,0,0) |

## slots 插槽

| key     | 说明           |
| :------ | -------------- |
| default | 趋势显示的文字 |
