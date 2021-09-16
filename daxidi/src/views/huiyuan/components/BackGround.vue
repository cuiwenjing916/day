<template>
  <div class = "background">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'back-ground',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang = "scss" scoped>
.background{
  width: 100%;
  height: 2rem;
  background: rgb(44, 49, 54);
  h2{
    font-size: 17px;
    color: #fff;
    padding-top: 0.2rem;
  }
}
</style>
