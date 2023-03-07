import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'jan-element-components-doc',
  themeConfig: {
    logo: '/cat.png',
    siteTitle: 'jan-element-components-doc',

    socialLinks: [{ icon: 'github', link: '' }],

    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧',
    },
  },
});
