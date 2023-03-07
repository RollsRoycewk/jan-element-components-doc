# 图标选择器

用户点击按钮,弹出框显示所有图标,点击图标可以复制图标代码

## 按需引入

```js
import chooseIcon from "jan-element-components/chooseIcon";
import "jan-element-components/chooseIcon/style.css";

const app = createApp(App);
app.use(chooseIcon);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-choose-icon title="选择图标" v-model:visible="visible"></m-choose-icon>
 </div>

## 示例代码

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

```js
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-choose-icon title="选择图标" v-model:visible="visible"></m-choose-icon>
 </div>

  <script lang="ts" setup>
  import { ref } from "vue";

  let visible = ref<boolean>(false);
  </script>
```
