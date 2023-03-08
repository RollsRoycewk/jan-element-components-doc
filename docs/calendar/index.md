# 日历

基于`fullcalendar`封装的日历组件

```js
import calendar from "jan-element-components/calendar";
import "jan-element-components/calendar/style.css";

app.use(calendar);
```

## 基本用法

具体演示请参考[演示网站](https://rollsroycewk.github.io/jan-element-components-web/#/calendar)

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-calendar></m-calendar>
 </div>

## 示例代码

```html
<m-calendar></m-calendar>
```

## Props

| 属性            | 说明               | 类型        | 可选值     | 默认值       |
| :-------------- | ------------------ | ----------- | ---------- | ------------ |
| local           | 日历显示的语言     | string      | -          | zh-cn        |
| initialView     | 视图模式           | string      | -          | dayGridMonth |
| buttonText      | 按钮文字           | object      | -          | -            |
| headerToolbar   | 头部工具栏         | object      | -          | -            |
| footerToolbar   | 底部工具栏         | object      | -          | -            |
| events          | 日历事件           | object      | -          | -            |
| displayEventEnd | 显示事件的结束时间 | boolean     | true/false | false        |
| eventContent    | 自定义渲染内容方法 | EventItem[] | -          | -            |

更多配置请参考[fullcalendar](https://fullcalendar.io/)

## EventItem 数据格式

| key      | 说明           | 类型    |
| :------- | -------------- | ------- |
| title    | 事件标题       | string  |
| start    | 开始时间       | string  |
| end      | 结束时间       | string  |
| editable | 是否可拖动编辑 | boolean |
