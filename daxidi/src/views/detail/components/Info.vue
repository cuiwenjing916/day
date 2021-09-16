<template>
  <div class="info-box">
    <output class="price">￥<b>{{price}}</b></output>
    <output class="oldprice">原价￥<s>{{price}}</s></output>
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'info',
  props: ['price','title']
}
</script>

<style lang="scss" scoped>
.info-box {
  font-size: 14px;
  padding: 16px;
  background: #fff;
  text-align: left;
  .price {
    color: $color-primary;
    font-size: 14px;
    b {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .oldprice {
    font-size: 12px;
    color: #a8a8a8;
    margin-left: 8px;
  }
  .title {
    color: #323232;
    font-size: 18px;
    margin-top: 12px;
  }
}
</style>