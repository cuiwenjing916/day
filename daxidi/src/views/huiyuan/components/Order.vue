<template>
  <div class =  "order">
    <div class = "head">
      <h3>我的订单</h3>
      <a href = "javascript:;">查看全部&gt;</a>
    </div>
    <div class = "nav">
      <router-link to=''>
        <span class = "iconfont icon-daifukuan"></span>
        <p>待付款</p>
      </router-link>
      <router-link to=''>
        <span class = "iconfont icon-fahuo"></span>
        <p>代发货</p>
      </router-link>
      <router-link to=''>
        <span class = "iconfont icon-fahuo"></span>
        <p>待收货</p>
      </router-link>
      <router-link to=''>
        <span class = "iconfont icon-pinglun1"></span>
        <p>待评价</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>

<style lang = "scss" scoped>
.order{
  width: 95%;
  margin: 0.2rem auto;
  background: #fff;
  border-radius: 0.1rem;
  padding-bottom: 0.15rem;
  .head{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.1rem;
    h3{
      font-size: 0.17rem;
      font-weight: 600;
      margin-left: 0.15rem;
    }
    a{
      display: block;
      font-size: 0.15rem;
      color: #888;
      margin-right: 0.1rem;
    }
  }
  .nav{
    width: 100%;
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    a{
      width: 25%;
      display: block;
      span{
        display: block;
        font-size: 0.3rem;
      }
      p{
        font-size: 0.13rem;
        color: #888;
      }
    }
  }
}
</style>
