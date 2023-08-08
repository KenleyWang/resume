<template>
  <div class="main-com">
    <MainBody></MainBody>
    <DetailedInformation></DetailedInformation>
  </div>
</template>

<script>
import MainBody from './MainBody.vue'
import DetailedInformation from './DetailedInformation.vue'
export default {
  name: "MainCom",
  components: {
    MainBody,
    DetailedInformation
  },
};
</script>

<style scoped></style>
