# 通知列表

提供 tab 切换的通知列表

## 按需引入

```js
import list from "jan-element-components/list";
import "jan-element-components/list/style.css";
app.use(list);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
   <m-list :list="list" :actions="actions"></m-list>
 </div>

## 示例代码

```html
<m-list :list="list" :actions="actions"></m-list>
```

```ts
<script lang="ts" setup>
const list = [
  {
    title: "通知",
    content: [
      {
        title: "蒂姆·库克回复了你的邮件",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "乔纳森·伊夫邀请你参加会议",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      },
      {
        title: "斯蒂夫·沃兹尼亚克已批准了你的休假申请",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        title: "任务名称",
        desc: "任务需要在 2017-01-12 20:00 前启动",
        tag: "未开始",
        tagType: "",
      },
      {
        title: "第三方紧急代码变更",
        desc: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
        tag: "马上到期",
        tagType: "danger",
      },
      {
        title: "信息安全考试",
        desc: "指派竹尔于 2017-01-09 前完成更新并发布",
        tag: "已耗时8天",
        tagType: "warning",
      },
    ],
  },
];
const actions = [
  {
    text: "清空代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
];

</script>

```

<script lang="ts" setup>
const list = [
  {
    title: "通知",
    content: [
      {
        title: "蒂姆·库克回复了你的邮件",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "乔纳森·伊夫邀请你参加会议",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      },
      {
        title: "斯蒂夫·沃兹尼亚克已批准了你的休假申请",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: "描述信息描述信息描述信息",
        time: "3小时前",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        title: "任务名称",
        desc: "任务需要在 2017-01-12 20:00 前启动",
        tag: "未开始",
        tagType: "",
      },
      {
        title: "第三方紧急代码变更",
        desc: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
        tag: "马上到期",
        tagType: "danger",
      },
      {
        title: "信息安全考试",
        desc: "指派竹尔于 2017-01-09 前完成更新并发布",
        tag: "已耗时8天",
        tagType: "warning",
      },
    ],
  },
];
const actions = [
  {
    text: "清空代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
];

</script>

## Props

| 属性    | 说明       | 类型            | 可选值 | 默认值 |
| :------ | ---------- | --------------- | ------ | ------ |
| list    | 列表的内容 | ListOptions[]   | 必填   | -      |
| actions | 操作的内容 | ActionOptions[] | -      | []     |

## ListOptions 数据格式

| key     | 说明       | 类型       |
| :------ | ---------- | ---------- |
| title   | tab 的标题 | string     |
| content | 列表内容   | ListItem[] |

## ListItem 数据格式

| key     | 说明     | 类型                          |
| :------ | -------- | ----------------------------- |
| avatar  | 头像     | string                        |
| title   | 标题     | string                        |
| desc    | 描述     | string                        |
| time    | 时间     | string                        |
| tag     | 标签内容 | string                        |
| tagType | 标签类型 | ""/sucess/info/warning/danger |

## ActionOptions 数据格式

| key  | 说明     | 类型   |
| :--- | -------- | ------ |
| text | 操作标题 | string |
| icon | 操作图标 | string |
