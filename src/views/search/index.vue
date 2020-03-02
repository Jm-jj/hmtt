<template>
  <div class="container">
    <!-- left-arrow 左侧有小箭头
    @click-left 单机左侧箭头 的事件处理-->
    <van-nav-bar title="搜索中心" left-arrow @click-left="$router.back()" />
  </div>
</template>

<script>
export default {
  name: 'search-index'
}
</script>

<style scoped lang='less'></style>
