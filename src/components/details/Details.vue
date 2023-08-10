<template>
  <div class="details">
    <!-- 个人介绍 -->
    <div>Info</div>
    <!-- 页面 -->
    <div>
      <router-view></router-view>
    </div>
    <!-- 导航 -->
    <div>Nav</div>
  </div>
</template>

<script>
export default {
  name: 'DetailsComponent',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
