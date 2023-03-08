# 通知菜单

显示通知菜单列表,支持多种自定义

## 按需引入

```js
import notifiction from "jan-element-components/notifiction";
import "jan-element-components/notifiction/style.css";

app.use(notifiction);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-notifiction :value="50"></m-notifiction>
    <br />
    <br />
    <m-notifiction :value="50" :max="30"></m-notifiction>
    <br />
    <br />
    <m-notifiction :value="50" isDot></m-notifiction>
    <br />
    <br />
    <m-notifiction :value="50" icon="ChatRound"></m-notifiction>
    <br />
    <br />
    <m-notifiction :value="50">
      <template #default>
        <m-list
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notifiction>
 </div>

## 示例代码

```html
<div>
  <m-notifiction :value="50"></m-notifiction>
  <br />
  <br />
  <m-notifiction :value="50" :max="30"></m-notifiction>
  <br />
  <br />
  <m-notifiction :value="50" isDot></m-notifiction>
  <br />
  <br />
  <m-notifiction :value="50" icon="ChatRound"></m-notifiction>
  <br />
  <br />
  <m-notifiction :value="50">
    <template #default>
      <m-list :list="list" :actions="actions"></m-list>
    </template>
  </m-notifiction>
</div>
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

| 属性  | 说明           | 类型          | 可选值     | 默认值 |
| :---- | -------------- | ------------- | ---------- | ------ |
| icon  | 显示的图标     | string        | -          | Bell   |
| value | 通知数量       | string/number | -          | -      |
| max   | 最大值         | number        | -          | -      |
| isDot | 是否显示小圆点 | boolean       | true/false | false  |

## slots 插槽

| 名称    | 说明                   |
| :------ | ---------------------- |
| default | 点击图标之后显示的内容 |
