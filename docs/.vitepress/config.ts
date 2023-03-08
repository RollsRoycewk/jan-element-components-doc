import { defineConfig } from "vitepress";

export default defineConfig({
  title: "jan-element-components-doc",
  base: "/",
  head: [],
  lastUpdated: true,
  themeConfig: {
    logo: "/cat.png",
    siteTitle: "jan-element-components-doc",
    socialLinks: [{ icon: "github", link: "" }],
    // 头部导航
    nav: [
      {
        // 导航名称
        text: "首页",
        // 跳转项目链接(路由)
        link: "/",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "介绍",
        link: "/intro/",
      },
      {
        text: "快速开始",
        link: "/quickStart/",
      },
      {
        text: "图标选择器",
        link: "/chooseIcon/",
      },
      {
        text: "省市区选择",
        link: "/chooseArea/",
      },
      {
        text: "趋势标记",
        link: "/trend/",
      },
      {
        text: "时间选择",
        link: "/chooseTime/",
      },
      {
        text: "日期选择",
        link: "/chooseDate/",
      },
      {
        text: "列表",
        link: "/list/",
      },
      {
        text: "通知菜单",
        link: "/notification/",
      },
      {
        text: "导航菜单",
        link: "/menu/",
      },
      {
        text: "城市选择",
        link: "/chooseCity/",
      },
      {
        text: "进度条",
        link: "/progress/",
      },
      {
        text: "日历",
        link: "/calendar/",
      },
      {
        text: "表单",
        link: "/form/",
      },
      {
        text: "弹出框表单",
        link: "/modalForm/",
      },
      {
        text: "表格",
        link: "/table/",
      },
    ],
    footer: {
      message: "其实我也不知道写啥注脚",
      copyright: "那我就随便写个吧",
    },
  },
});
