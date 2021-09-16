<template>
  <div class="box">
    <router-link tag="dl" v-for="item in nav" :key="item.id" :to="`${item.path}`">
      <dt>
        <img :src="item.img" />
        <!-- <img src="../../../../static/img/icon／24／展示-列表@3x(1).png"/> -->
      </dt>
      <dd>
        <h3>{{item.h2}}</h3>
        <p>{{item.p}}</p>
      </dd>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'al-nav',
  props: {
    nav: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
  .box{
    width: 3.43rem;
    height: 3.88rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 .2rem;
    box-sizing: border-box;
    margin-top: -.2rem;
    // z-index: 120;
    dl{
      width: 100%;
      height: .88rem;
      display: flex;
      background-color: #fff;
      border-radius: .05rem;
      z-index: 200;
      align-items: center;
      justify-content: center;
      dt{
        width: 30%;
        /* display: flex;
        align-items: center;
        justify-content: center; */
        text-align: center;
        img{
          width: .48rem;
          height: .48rem;
          // display: block;
        }
      }
      dd{
        width: 70%;
        text-align: left;
        h3{
          font-size: .2rem;
        }
        p{
            font-size: .13rem;
            color: #888888;
            line-height: .2rem;
        }
      }
    }
  }
  

</style>