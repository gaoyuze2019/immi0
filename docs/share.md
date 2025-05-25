# 文章分享

欢迎分享 immi0 博客的精彩内容！每篇文章都有独立的分享链接，方便您转发给朋友。

## 📚 所有文章

### 技术类
- **数据结构与算法介绍**  
  📖 链接：https://www.immi0.com/posts/l1-intro-data-structures-algo  
  📱 短链：[点击复制](https://www.immi0.com/posts/l1-intro-data-structures-algo)

### 分析类
- **网易严选&大百多分析-来自ChatGPT**  
  📖 链接：https://www.immi0.com/posts/netease-vs-dabaibai-analysis  
  📱 短链：[点击复制](https://www.immi0.com/posts/netease-vs-dabaibai-analysis)

### 商业类  
- **品牌选择**  
  📖 链接：https://www.immi0.com/posts/brand-selection  
  📱 短链：[点击复制](https://www.immi0.com/posts/brand-selection)

## 🔗 快速分享

选择你想分享的方式：

<div class="share-buttons">
  <button onclick="copyToClipboard('https://www.immi0.com')" class="share-btn">📋 复制主页链接</button>
  <button onclick="shareToWeChat()" class="share-btn">💬 分享到微信</button>
  <button onclick="shareToWeibo()" class="share-btn">📱 分享到微博</button>
</div>

<script>
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('链接已复制到剪贴板！');
  });
}

function shareToWeChat() {
  // 微信分享逻辑
  alert('请复制链接手动分享到微信');
}

function shareToWeibo() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent('immi0 博客 - 记录技术与人生成长');
  window.open(`https://service.weibo.com/share/share.php?url=${url}&title=${title}`);
}
</script>

<style>
.share-buttons {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.share-btn {
  padding: 10px 20px;
  background: #3c8772;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.share-btn:hover {
  background: #2a6b5b;
}
</style>

---

💡 **提示**：每个链接都是永久有效的，您可以安心分享给朋友！ 