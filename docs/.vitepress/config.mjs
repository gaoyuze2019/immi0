// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'immi0 博客',
  description: '记录技术与人生成长',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ]
  }
})