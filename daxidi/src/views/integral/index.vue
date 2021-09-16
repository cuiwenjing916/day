<template>
  <div>
    <al-list title="积分商城" :list="list" />
  </div>
</template>

<script>
export default {
  name: 'integral',
  data () {
    return {
      list: [],
      params: {
        page:1,
        page_size:10
      },
    }
  },
  methods: {
    fetchProducts () {
      this.$axios.get('/list', this.params).then((res) => {
        this.list = this.list.concat(res.data)
      })
    },
    /* onReachBottom () {
      this.params.page += 1
      this.fetchProducts()
    } */
  },
  created () {
    this.fetchProducts ()
  }
}
</script>

<style>

</style>