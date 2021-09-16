<template>
  <div id="app">
    <keep-alive include="main-wrap">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>

export default {
  created() {
    this.$store.dispatch('user/info')
  }
}
</script>

<style lang="scss">
#app {
  background: #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  font-size: 12px;
}

</style>
