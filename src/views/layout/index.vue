<template>
  <div class="container">
    <!-- van-nav-bar 導航欄組件
    title 中間内容
    right-text 導航右側呈現内容
    fixed 固定定位到頭部
    @click-right 右側文字單擊事件 -->
    <van-nav-bar
      title="黑馬頭條"
      right-text="搜索"
      @click-right="$router.push('/search')"
    />
    <div class="my-wrapper" >
      <router-view></router-view>
    </div>
    <!-- 公共脚步
    van-tabbar 標簽欄組件
    icon 圖標 -->

    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">首頁</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">問答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">視頻</van-tabbar-item>
      <van-tabbar-item to="/user" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped lang="less">
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 92px;
    padding-bottom: 100px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}</style>
