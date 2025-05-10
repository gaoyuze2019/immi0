<template>
  <div id="comments-container"></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'gaoyuze2019/immi0')           // 你的仓库
    script.setAttribute('issue-term', 'pathname')              // 用页面路径作为Issue标识
    script.setAttribute('theme', 'preferred-color-scheme')     // 自动跟随亮/暗模式
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true
    this.$el.appendChild(script)
  }
}
</script> 