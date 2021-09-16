<template>
  <div class="classify">
    <head-menu></head-menu>
  </div>
</template>

<script>
import axios from 'axios'
import HeadMenu from './components/HeadMenu'
export default {
  name: 'classify',
  components: {
    HeadMenu
  },
  data () {
    return {
      list: []
    }
  },
  /* created() {
    axios.get('/api/product/category').then((res) => {
      this.list = res.data.data
      console.log(this.list);
    })
  }, */
}
</script>

<style lang="scss" scoped>
  .classify {
    width: 100%;
    background: #fff;
    height: 100vh;
  }
</style>