<template>
    <div class="personal-card">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "PersonalCard",
    props: {
      // msg: String
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
  