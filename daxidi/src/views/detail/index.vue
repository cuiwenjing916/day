<template>
  <div class="detail-box">
    <banner class="banner" :images="detail.images" />
    <info :title="detail.name" :price="detail.price"></info>
    <al-card title="推荐菜谱" url="/"></al-card>
    <al-comment />
    <al-card>
      <div class="detail" v-html="detail.detail"></div>
    </al-card>
    <al-bay />
  </div>
</template>

<script>
import Banner from './components/Banner'
import Info from './components/Info'
import AlDelivery from './components/Delivery/index'
export default {
  name: 'detail',
  components: {
    Banner,
    Info,
    AlDelivery
  },
  data () {
    return {
      detail: {},
      banner:[]
    }
  },
 /*  methods: {
    fetchProducts () {
      this.$axios.get('/banner', this.params).then((res) => {
        this.banner = this.banner.concat(res.data)
        console.log(this.banner);
      })
    }
  }, */
  created () {
    /* axios.get('/api/home').then((res) => {
      this.banner = res.data.data.banners
      console.log(this.banner)
    }) */
    this.getDetail()
    // this.$api.product.detail(this.$route.params.id)
  },
  methods: {
    async getDetail() {
      const res = await this.$api.product.detail(this.$route.params.id);
      this.detail = res.data.data;
      this.detail.detail = JSON.parse(this.detail.detail);
      this.detail.price = (this.detail.price / 100).toFixed(2);
    }
  },
}
</script>

<style lang="scss" scoped>
.detail-box{
  width: 100%;
  background: #eee;
  .detail {
    /deep/ img {
      display: block;
      width: 100%;
    }
  }
  /* .banner{
  width: 100%;
  height: 3rem;
} */
}

</style>