import DefaultTheme from 'vitepress/theme'
import Utterances from './components/Utterances.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件
    app.component('Utterances', Utterances)
  }
} 