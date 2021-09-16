<template>
  <div class="footer">
    <div class="checbox">
      <input type="checkbox" v-model="isCheckAll" />
      全选
    </div>
    <div class="price-box">
      <div>
        <h2>小计：<span>￥<b>{{price | formatPrce}}</b></span></h2>
        <p>运费<span>22</span>再买<span>202</span>免运费</p>
      </div>
      <al-button class="btn" type="danger">
        <router-link to="/bay">
          结算{{carCount}}
        </router-link>
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
.footer {
  @include wh(100%,66px);
  background: #fff;
  padding: 0 12px;
  box-sizing: border-box;
  position: fixed;
  bottom: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .checbox {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .price-box {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2 {
      font-size: 14px;
      span {
        color: $color-primary;
      }
      b  {
        font-size: 18px;
      }
    }
    p {
      color: #999;
      span {
        color: #000;
      }
    }
    .btn {
      width: 88px;
    }
  }
}
</style>