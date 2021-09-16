<template>
  <div class="footer">
    <div class="shou">
        <div @click="show = !show">
          <i v-if="!show" class="iconfont icon-xingxing1"></i>
          <i v-else class="iconfont icon-xingxing"></i>
        </div>
        <span>收藏</span>
    </div>
    <al-add-car class="buy" :product-info="$parent.detail">
      <button type="danger">立即购买</button>
    </al-add-car>
  </div>
</template>

<script>
export default {
  name: 'bay',
  data () {
    return {
      show: false,
      isShow: false,
    }
  },
}
</script>

<style scoped lang="scss">
.footer {
    background: #fff;
    width: 100%;
    height: .5rem;
    position: fixed;
    bottom: 0rem;
    display: flex;
    padding: 0 .1rem;
    box-sizing: border-box;
    padding: 5px 0;
    .shou {
      width: .5rem;
      height: 100%;
      font-size: .2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      i {
        font-size: .3rem;
      }
      .active {
        background: brown;
        border: 0;
      }
      span {
        font-size: 12px;
      }
    }
    button {
      flex: 1;
      border: 0;
      color: #fff;
      @include font;
      font-size: 16px;
      background: $color-warning;
      border-radius: .2rem;
    }
}
  .buy {
    flex: 1;
    button {
      width: 100%;
      height: 40px;
    }
  }
</style>