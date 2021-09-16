<template>
  <div class= "contact-info">
    <ul>
      <li>
        <span class  =  "iconfont icon-pinglun"></span>
        <p>专属客服</p>
      </li>
      <li class = "alone">
        <div class = "left">
          <span class = "iconfont icon-dianhua"></span>
          <p>电话服务</p>
        </div>
        <div class = "right">客服时间7：00-22：00</div>
      </li>
      <li>
        <span class = "iconfont icon-address_icon"></span>
        <p>收货地址</p>
      </li>
      <li>
        <span class = "iconfont icon-weibiaoti-"></span>
        <p>设置</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contact-info'
}
</script>

<style lang = "scss" scoped>
.contact-info{
  width: 95%;
  margin: 0.2rem auto;
  border-radius: 0.1rem;
  background: #fff;
  ul{
    width: 100%;
    li{
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      border-bottom: 0.01rem solid #EDEDED;
      span{
        font-size: 0.25rem;
        margin-left: 0.15rem;
      }
      p{
        font-size: 0.16rem;
        font-weight: 600;
        margin-left: 0.2rem;
      }
    }
    .alone{
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        span{
          font-size: 0.25rem;
          margin-left: 0.15rem;
        }
        p{
          font-size: 0.16rem;
          font-weight: 600;
          margin-left: 0.2rem;
        }
      }
      .right{
        font-size: 0.15rem;
        color: #888;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
