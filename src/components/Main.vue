<template>
  <div class="k-section">
    <Overview></Overview>
  </div>
  <div class="k-section">
    <Details></Details>
  </div>
  <router-view name="404"></router-view>
</template>

<script>
import Overview from './overview'
import Details from './details'
export default {
  name: "MainComponent",
  components: {
    Overview,
    Details
  },
  mounted() {
    console.log(this.$router)
  }
};
</script>

<style scoped>
.k-section {
  height: 100vh;
  width: 100vw;
}
</style>
