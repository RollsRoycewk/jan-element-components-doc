# 时间选择

提供开始时间和结束时间选择联动

## 按需引入

```js
import chooseTime from 'jan-element-components/chooseTime';

app.use(chooseTime);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-chooseTime></m-chooseTime>
 </div>

## 示例代码

```html
<m-chooseTime></m-chooseTime>
```

## Props

| 属性             | 说明               | 类型   | 可选值 | 默认值         |
| :--------------- | ------------------ | ------ | ------ | -------------- |
| startPlaceholder | 开始时间的占位符   | string | -      | 请选择开始时间 |
| endPlaceholder   | 结束时间的占位符   | string | -      | 请选择结束时间 |
| startTimeStart   | 开始时间的开始选择 | string | -      | 08:00          |
| startStep        | 开始时间的步进     | string | -      | 00:30          |
| startTimeEnd     | 开始时间的结束选择 | string | -      | 24:00          |
| ensTimeStart     | 结束时间的开始选择 | string | -      | 08:00          |
| endStep          | 结束时间的步进     | string | -      | 00:30          |
| endTimeEnd       | 结束时间的结束选择 | string | -      | 24:00          |

## 事件

| 事件名      | 说明                   | 参数                 |
| :---------- | ---------------------- | -------------------- |
| startChange | 开始时间变化时触发     | val: string,开始时间 |
| endChange   | 结束时间发生变化时触发 | val: Value,结束时间  |

## Value 数据格式

| key       | 说明           | 类型   |
| :-------- | -------------- | ------ |
| startTime | 趋势显示的文字 | string |
| endTime   | 结束时间       | string |
