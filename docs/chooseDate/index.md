# 时间选择

提供开始日期和结束日期选择联动

## 按需引入

```js
import chooseDate from "jan-element-components/chooseDate";

app.use(chooseDate);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-chooseDate></m-chooseDate>
 </div>

## 示例代码

```html
<m-chooseDate></m-chooseDate>
```

## Props

| 属性             | 说明                       | 类型    | 可选值     | 默认值         |
| :--------------- | -------------------------- | ------- | ---------- | -------------- |
| startPlaceholder | 开始日期的占位符           | string  | -          | 请选择开始日期 |
| endPlaceholder   | 结束日期的占位符           | string  | -          | 请选择结束日期 |
| disableToday     | 是否禁用选择今天之前的日期 | boolean | true/false | true           |
