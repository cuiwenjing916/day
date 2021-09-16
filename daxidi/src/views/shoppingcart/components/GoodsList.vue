<template>
  <div class="goods-list">
    <dl v-for="item in list" :key="item.id">
      <dt>
        <input type="checkbox" :checked="item.active == 1" @click="checked(item)" />
        <img :src="item.img" />
      </dt>
      <dd>
        <h2>{{item.name}}</h2>
        <p>
          <span class="price"><i>￥</i><b>{{item.price | formatPrce}}</b></span>
        </p>
        <al-number class="num-btn" :value="item.num" @input="(num) => updateNum(num,item)" size="min" />
      </dd>
    </dl>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'good-list',
  props: {
    layout: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    ...mapState('car',['list'])
  },
  methods: {
    checked (item) {
      this.$store.dispatch('car/update',{
        id: item.id,
        active: item.active === '1' ? '0' : '1'
      })
    },
    updateNum (num,item) {
      this.$store.dispatch('car/update',{
        id:item.id,
        num
      })
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
.goods-list {
  margin-top: 36px;
  background: #fff;
  padding-bottom: 10px;
  dl {
    width: 100%;
    margin: 5px 0;
    height: auto;
    display: flex;
    dt {
      // @include wh (88px,88px);
      border-radius: 8px;
      overflow: hidden;
      margin-right: 8px;
      display: flex;
      align-items: center;
      img {
        @include wh(80px,80px);
        display: block;
      }
    }
    dd {
      @include flex(space-between,start,column);
      flex: 1;
      // padding-right: 5px;
      position: relative;
      h2 {
        font-size: 14px;
        line-height: 1.5;
      }
      p {
        font-size: 12px;
        .price {
          color: $color-primary;
          b {
            font-size: 18px;
            font-weight: bold;
          }
        }
        .oldPrice {
          font-size: 12px;
          color: #a8a8a8;
          margin-left: 8px;
        }
      }
      .num-btn {
        position: absolute;
        right: 5px;
        bottom:5px;
      }
    }
  }
}
</style>