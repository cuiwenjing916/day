<template>
  <div class="comment">
    <div class="head">
      <h2>商品评论<span>(11)</span></h2>
      <router-link to="/comment">
        <p>查看全部&gt;</p>
      </router-link>
    </div>
    <goods-comment />
    
  </div>
</template>

<script>
import GoodsComment from './GoodsComment.vue'
export default {
  components: { GoodsComment },
  name: 'comment',

}
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  background: #fff;
  padding: 0 .1rem;
  box-sizing: border-box;
  .head {
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: .16rem;
      color: #000;
      span {
        @include font;
        color: #ccc;
      }
    }
    p {
      color: #ccc;
      @include font;
    }
  }
}
</style>