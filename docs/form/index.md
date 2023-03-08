# 表单

可配置型表单,支持多种自定义

## 按需引入

```js
import form from "jan-element-components/form";

app.use(form);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-form :options="options">
     <template #action="scope">
        <el-button type="primary">提交</el-button>
        <el-button >重置</el-button>
     </template>
    </m-form>
 </div>

<script lang="ts" setup>
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
</script>

## 示例代码

```html
<m-form :options="options">
  <template #action="scope">
    <el-button type="primary">提交</el-button>
    <el-button>重置</el-button>
  </template>
</m-form>
```

```ts
<script lang="ts" setup>
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
</script>
```

## Props

| 属性        | 说明           | 类型          | 可选值 | 默认值 |
| :---------- | -------------- | ------------- | ------ | ------ |
| options     | 表单配置项     | FormOptions[] | 必填   | -      |
| httpRequest | 上传自定义方法 | function      | -      | -      |

## FormOptions 数据格式

| 属性        | 说明                     | 类型                                   |
| :---------- | ------------------------ | -------------------------------------- |
| type        | 表单项显示的元素         | string                                 |
| value       | 表单项的值               | any                                    |
| label       | 表单项 label             | string                                 |
| prop        | 表单项的标识             | string                                 |
| rules       | 表单项的验证规则         | 同`element-plus`表单验证规则一致       |
| placeholder | 表单项的占位符           | string                                 |
| attrs       | 表单元素特有的属性       | 同`element-plus`表单组件属性一致       |
| children    | 表单项的子元素           | FormOptions[]                          |
| uploadAttrs | 处理上传组件的属性和方法 | 同`element-plus`的'upload'组件属性一致 |

## 事件

| 事件名        | 说明                                                                                                     | 参数                                    |
| :------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| on-preview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |
| on-remove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |
| on-success    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |
| on-error      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |
| on-progress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |
| on-change     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |
| before-upload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |
| on-exceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |

## slots 插槽

| 名称       | 说明                                              |
| :--------- | ------------------------------------------------- |
| uploadArea | 上传组件的占位符                                  |
| uploadTip  | 上传组件的提示信息                                |
| action     | 表单按钮的作用域插槽,form:表单实例,model:表单数据 |
