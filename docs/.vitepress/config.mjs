// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'immi0 博客',
  description: '记录技术与人生成长',
  base: '/', // Base URL for deployment
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '全部文章',
          items: [
            { text: '数据结构与算法介绍', link: '/posts/l1-intro-data-structures-algo' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaoyuze2019/immi0' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Immi0'
    }
  }
})