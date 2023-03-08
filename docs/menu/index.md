# 导航菜单

侧边栏菜单,支持无限层级

## 按需引入

```js
import menu from "jan-element-components/menu";

app.use(menu);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-menu :data="data1" defaultActive="1" name="name" index="index" icon="icon" children="children"></m-menu>
 </div>

<script lang="ts" setup>
const data1 = [
  {
    name: "导航1",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
      },
    ],
  },
];

const data2 = [
  {
    name: "导航1",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "Document",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "Document",
                children: [
                  {
                    name: "导航3-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "Document",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

## 示例代码

```html
<m-menu
  :data="data1"
  defaultActive="1"
  name="name"
  index="index"
  icon="icon"
  children="children"
></m-menu>
```

```html
<!-- JSX编写,有问问题修复中 -->
<!-- <m-infinite-menu
      style="width: 300px"
      :data="data2"
      defaultActive="2"
      active-text-color="orange"
      name="name"
      index="index"
      icon="icon"
      children="children"
    ></m-infinite-menu> -->
```

## Props

| 属性          | 说明                    | 类型    | 可选值     | 默认值   |
| :------------ | ----------------------- | ------- | ---------- | -------- |
| data          | 导航菜单的数据          | any[]   | 必填       | -        |
| defaultActive | 默认选中菜单的 index 值 | string  | -          | -        |
| router        | 是否是路由模式          | boolean | true/false | false    |
| name          | 菜单标题的键名          | string  | -          | name     |
| index         | 菜单标识的键名          | string  | -          | index    |
| icon          | 菜单图标的键名          | string  | -          | icon     |
| children      | 菜单子菜单的键名        | string  | -          | children |

继承`element-plus` `menu`组件的所有属性
