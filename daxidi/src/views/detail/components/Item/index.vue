<template>
  <div class="item">
    <div class="price">
      <p>￥<span>{{price}}</span></p>
      <b @click="isShow = true">分享</b>
    </div>
    <div class="oldPrice">原价 ￥ 99.9</div>
    <h2>{{title}}</h2>
    <al-popup :show.sync="isShow" title="1">
      <div>weixin</div>
    </al-popup>
  </div>
</template>

<script>
export default {
  name: 'al-item',
  props: {
    title: {
      type:String,
      default: ''
    },
    price: {
      type:String,
      default: ''
    }
  },
  data () {
    return {
      show: false,
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: .12rem;
  text-align: left;
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .3rem;
    p {
      color: $color-warning;
      font-size: .16rem;
      span {
        font-size: .2rem;
      }
    }
  }
  .oldPrice {
    color: #333;
  }
  h2{
    font-size: .2rem;
    color: #000;
    line-height: .25rem;
  }
}
</style>