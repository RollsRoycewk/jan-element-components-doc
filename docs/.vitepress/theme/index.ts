import Theme from 'vitepress/theme';
import './style/var.css';
import { h } from 'vue';
import AnimationTitle from '../components/AnimationTitle.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// // 如果您正在使用CDN引入，请删除下面一行。
// import * as Icons from '@element-plus/icons-vue';

import JanUI from 'jan-element-components';
import 'jan-element-components/style.css';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(AnimationTitle),
    });
  },
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(JanUI);
  },
};
