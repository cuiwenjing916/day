<template>
  <div class="box">
    <router-link tag="dl" to="/integral">
      <dt>
        <img src="../../../static/images/shop.png" />
      </dt>
      <dd>
        <h3>积分商城</h3>
        <p>超值美食等你兑</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/gift">
      <dt>
        <img src="../../../static/images/shop.png" />
      </dt>
      <dd>
        <h3>礼品卡</h3>
        <p>超值美食等你兑</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/shibboleth">
      <dt>
        <img src="../../../static/images/shop.png" />
      </dt>
      <dd>
        <h3>口令</h3>
        <p>超值美食等你兑</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/menus">
      <dt>
        <img src="../../../static/images/shop.png" />
      </dt>
      <dd>
        <h3>菜谱</h3>
        <p>超值美食等你兑</p>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menus'
}
</script>

<style lang="scss" scoped>
.box{
  z-index: 100;
  position: relative;
  margin-top: -.2rem;
    dl{
      display: flex;
      flex-direction: row;
      z-index: 100;
      padding: 20px;
      background: #fff;
      margin: 0 16px;
      margin-bottom: 12px;
      box-shadow: 0px 4px 8px 0px rgba(50,50,50,0.05);
      border-radius: 8px;
      dt{
        @include wh(48px,48px);
        img{
          @include wh(100%,100%)
        }
      }
      dd{
        @include flex(center,start,column);
        margin-left: 16px;
        h3{
          font-size: 16px;
          color: #323232;
        }
        p{
            font-size: 13px;
            color: #888888;
            margin-top: 6px;
        }
      }
    }
  }
</style>
