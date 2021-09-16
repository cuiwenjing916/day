<template>
  <div class="list">
    <div class="head">
      <img src="../../static/images/right.png"/>
      <h2 class="top">{{title}}</h2>
      <img src="../../static/images/left.png"/>
    </div>
    <div class="box">
      <!-- <dl v-for="list in list" :key="list.id"> -->
        <router-link v-for="list in list" :key="list.id" :to="`/detail/${list.id}`" tag="dl">
          <dt>
            <img :src="list.img">
          </dt>
          <dd>
            <h3>大希地{{list.name}}</h3>
            <p>￥<s>{{list.price}}</s></p>
            <p>￥<span>{{(list.price / 100).toFixed(2)}}</span>+<span>{{list.integral}}</span>积分</p>
            <al-add-car :productInfo="list">
              <img class="addCar" src="../../static/images/add.png" />
            </al-add-car>
          </dd>
        </router-link>
      <!-- </dl> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #eee;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    .top {
      font-size: .16rem;
      line-height: .48rem;
      margin: 0 8px;
      color: #323232;
    }
    img {
      width: 32px;
      height: 3px;
      display: block;
    }
  }
  
  .box {
    width: 3.43rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    dl {
      width: 1.66rem;
      height: 2.62rem;
      border-radius: .08rem;
      background-color: #fff;
      margin-top: .1rem;
      dt {
        width: 1.66rem;
        height: 1.66rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: .08rem;
        }
      }
      dd {
        width: 1.50rem;
        height: 82px;
        text-align: left;
        padding: 0 .05rem;
        box-sizing: border-box;
        position: relative;
        h3 {
          color: #323232;
          font-size: .14rem;
          line-height: .2rem;
          @include ellipsis(2);
        }
        p {
          font-size: .12rem;
          color: #888888;
          line-height: .2rem;
          &:last-child {
            color: #ee3344;
          }
          span {
            font-size: .20rem;
          }
        }
        .addCar {
        @include wh(24px,24px);
        position: absolute;
        right: 5px;
        bottom:5px;
      }
      }
    }
  }
}
</style>