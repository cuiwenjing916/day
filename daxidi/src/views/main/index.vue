<template>
<div id="wrap" include="home,classify">
  <keep-alive>
    <router-view class="mains" />
  </keep-alive>
  <footer>
      <router-link to="/home" active-class="active">
        <img src="../../static/images/home.png" />
        <img class="selectde" src="../../static/images/home.active.png" />
        <span>首页</span>
      </router-link>
      <router-link to="/classify" active-class="active">
        <img src="../../static/images/fen.png" />
        <img class="selectde" src="../../static/images/fen.active.png" />
        <span>分类</span>
      </router-link>
      <router-link to="/shoppingcart" active-class="active" class="sum-box">
        <img src="../../static/images/shopping.png" />
        <img class="selectde" src="../../static/images/shopping.active.png" />
        <span>购物车</span>
        <b class="sum">{{carCount}}</b>
      </router-link>
      <router-link to="/my" active-class="active">
        <img src="../../static/images/my1.png" />
        <img class="selectde" src="../../static/images/my.active.png" />
        <span>我的</span>
      </router-link>
      <router-link to="/huiyuan" active-class="active">
        <img src="../../static/images/vip.png" />
        <img class="selectde" src="../../static/images/vip.active.png" />
        <span>会员</span>
      </router-link>
    </footer>
  <!-- <footer class= "footer">
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-icon--"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/huiyuan">
        <i class="iconfont icon-biaoqianA01_huiyuan-98"></i>
        <span>会员</span>
      </router-link>
    </nav>
  </footer> -->
</div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'main-wrap',
  computed: {
    ...mapGetters('car',['carCount'])
  }
}
</script>

<style lang="scss" scoped>
.sum-box {
  position: relative;
  .sum {
    position: absolute;
    top: -2px;
    right: 20px;
    border-radius: 50%;
    background: red;
    color: #fff;
    padding: 2px 4px;
  }
}
#wrap {
  @include font;
  .mains {
    margin-bottom: .6rem;
  }
  width: 100%;
  padding-bottom: 48px;
  footer {
    @include wh(100%,48px);
    @include flex(space-around,center);
    position: fixed;
    bottom: 0;
    background: #fff;
    img {
      @include wh(24px,24px);
      &.selectde {
        display: none;
      }
    }
    a {
      @include flex(center,center,column);
      flex: 1;
      color: $color-one;
      span {
      font-size: 10px;
      margin-top: 2px;
      }
      &.active {
        color: $color-primary;
        img {
          display: none;
          &.selectde {
            display: block;
          }
        }
      }
    }
  }
  /* footer {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: .6rem;
    background: #fff;
    height: auto;
    bottom: 0;
    z-index: 1000;
    justify-content: center;
    align-items: center;
    nav {
      display: flex;
      // border-top: .01rem solid #eee;
      padding: .05rem 0;
      a {
        flex: 1;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        // color: #fff;
        i {
          // @include wh(28px, 28px);
          display: block;
          font-size: .25rem;
        }
        span {
          @include font;
          line-height: 20px;
        }
        b {
          // @include wh(18px, 18px);
          display: block;
          background: red;
          color: #fff;
          line-height: 18px;
          @include font;
          text-align: center;
          position: absolute;
          top: -8px;
          right: 8px;
          border-radius: 50%;
        }
      }
      .router-link-active{
        i{
          display: block;
          color: $color-warning;
          // background: $color-warning;
        }
        span{
          display: block;
          color: $color-warning ;
        }
    }
    }
  } */
}
</style>