<template>
  <div class="sign-in">
    <div class="header">
      <div class="logo">
        <img src="../../../static/img/pic／默认头像@2x.png" />
      </div>
      <h2 v-if="info.data.phone === null">点击登录</h2>
      <h2 v-else>{{info.data.phone}}</h2>
    </div>
    <div class = "content">
      <div class= "box">
        <b></b>
        <p>礼品卡</p>
      </div>
      <div class= "box">
        <b></b>
        <p>积分</p>
      </div>
      <div class= "box">
        <b></b>
        <p>收藏夹</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'sign-in',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('user',['info'])
  }
}
</script>

<style lang = "scss" scoped>
.sign-in{
  width: 100%;
  margin-top: -0.9rem;
  z-index: 100;
  .header{
    display: flex;
    align-items: center;
    width: 95%;
    background: #fff;
    border-radius: 0.1rem 0.1rem 0 0;
    /* padding: 0.25rem 0; */
    margin: 0 auto;
    .logo{
      font-size: 0.5rem;
      margin-left: 0.2rem;
      img {
        width: 1rem;
      }
    }
    h2{
      font-size: 0.2rem;
      font-weight: 600;
      margin-left: 0.2rem;
    }
  }
  .content{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.3rem;
    padding-bottom: 0.1rem;
    background: #fff;
    border-radius: 0 0 0.1rem 0.1rem;
    .box{
      width: 33%;
      b{
        display: block;
        width: 0.13rem;
        height: 0.03rem;
        background: rgb(44, 49, 54);
        margin: 0 auto;
      }
      p{
        color: #888;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
