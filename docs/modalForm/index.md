# 弹出框表单

dialog 弹出框集成表单组件

## 按需引入

```js
import modalForm from "jan-element-components/modalForm";

app.use(modalForm);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form
    isScroll
      v-model:visible="visible"
      width="50%"
      :options="options"
    >
      <template #footer="scope">
        <el-button @click="cancel(scope.form)">Cancel</el-button>
        <el-button type="primary" >
          Confirm
        </el-button>
      </template>
    </m-modal-form>
 </div>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);

const options = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请输入用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请输入用密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: ["足球", "排球"],
    prop: "like",
    label: "爱好",
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "change",
      },
    ],
  },
  {
    type: "radio-group",
    value: "女",
    prop: "gender",
    label: "性别",
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "change",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: "图片不能为空",
    //     trigger: "blur",
    //   },
    // ],
  },
  {
    type: "editor",
    value: "123",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

let open = () => {
  visible.value = true;
};

const cancel = (form: any) => {
  visible.value = false;
};
</script>

## 示例代码

```html
<el-button type="primary" @click="open">open</el-button>
<m-modal-form v-model:visible="visible" width="50%" :options="options">
  <template #footer="scope">
    <el-button @click="cancel(scope.form)">Cancel</el-button>
    <el-button type="primary"> Confirm </el-button>
  </template>
</m-modal-form>
```

```ts
<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);

const options = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请输入用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请输入用密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: ["足球", "排球"],
    prop: "like",
    label: "爱好",
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "change",
      },
    ],
  },
  {
    type: "radio-group",
    value: "女",
    prop: "gender",
    label: "性别",
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "change",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: "图片不能为空",
    //     trigger: "blur",
    //   },
    // ],
  },
  {
    type: "editor",
    value: "123",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

let open = () => {
  visible.value = true;
};

const cancel = (form: any) => {
  visible.value = false;
};
</script>
```

## Props

| 属性         | 说明                                                                                                     | 类型                                    | 可选值     | 默认值 |
| :----------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------- | ------ |
| isScroll     | 是否只在可视区域内滚动                                                                                   | boolean                                 | true/false | false  |
| visible      | 控制弹框显示与隐藏                                                                                       | boolean                                 | true/false | false  |
| options      | 表单配置项                                                                                               | FormOptions[],参考表单用法              | 必填       | -      |
| onPreview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |
| onRemove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |
| onSuccess    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |
| onError      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |
| onProgress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |
| onChange     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |
| beforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |
| onExceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |

## slots 插槽

| 名称       | 说明                                               |
| :--------- | -------------------------------------------------- |
| uploadArea | 上传组件的占位符                                   |
| uploadTip  | 上传组件的提示信息                                 |
| footer     | dialog 底部作用域插槽,form:表单实例,model:表单数据 |
