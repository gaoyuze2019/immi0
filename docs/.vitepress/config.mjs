// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'immi0 博客',
  description: '记录技术与人生成长',
  base: '/', // Base URL for deployment
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#0D9488' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    logo: '/logo.png',
    outline: {
      level: [1, 1], // 只显示H1标题在目录中
      label: 'On this page'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '工具', link: '/tools' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '全部文章',
          items: [
            { text: '数据结构与算法介绍', link: '/posts/l1-intro-data-structures-algo' },
            { text: '网易严选&大百多分析-来自Chatgpt', link: '/posts/netease-vs-dabaibai-analysis' },
            { text: '品牌选择', link: '/posts/brand-selection' }
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