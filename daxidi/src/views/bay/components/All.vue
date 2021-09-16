<template>
  <div class="all">
    <div class="price-box">
      <div>
        <h2>共计：<span><b>{{price | formatPrce}}</b>元</span></h2>
        <p>{{carCount}}件商品</p>
      </div>
      <al-button class="btn" type="danger">
        付款
      </al-button>
    </div>
    
  </div>
</template>

<script>
import AlButton from '@/components/Button/index'
import {mapGetters, mapState} from 'vuex'
export default {
  name: 'cashier',
  components: {
    AlButton
  },
  computed: {
    ...mapState('car',['list']),
    ...mapGetters('car',['carCount']),
    isCheckAll: {
      get() {
        return this.list.reduce((prev,item,index) => {
        if (item.active === '0' || !prev) return false
          return true
        },true)
      },
      set(value) {
        this.$store.dispatch('car/update',{
          id: this.list.map(item => item.id),
          active: value ? '1' : '0'
        })
      }
    },
    price() {
      return this.list.reduce((prev,item,index) => {
      if (item.active === '0' ) return prev
        return prev + (item.price * item.num)
      },0)
    }
  },
  filters: {
    formatPrce (price) {
      return (price/100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>