<template>
  <div class="prodcut-list">
    <router-link
    :to="`/detail/${item.id}`"
    v-for="(item) in list"
    :key="item.id"
    tag="dl"
    >
      <dt>
        <img :src="item.img"/>
      </dt>
      <dd>
        <h2>{{item.name}}</h2>
        <p>
          <span class="price">
            <i>￥</i>
            <b>{{(item.price / 100).toFixed(2)}} </b>
          </span>
          <span class="oldPrice">
            <i>原价</i>
            <s>{{item.price}} </s>
          </span>
        </p>
        <al-add-car :productInfo="item">
          <img class="addCar" src="@/static/images/add.png" />
        </al-add-car>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: {
      type: Array,
      defulet: () => []
    }
  },
  /* computed: {
    arrPrice() {
      this.list.forEach((item) => {
        item.price = (item.price / 100).toFixed(2);
      })
    }
  },
  watch:{
    list(val){
      this.arrPrice
    }
  }, */
}
</script>

<style lang="scss" scoped>
.prodcut-list {
  margin-top: 36px;
  background: #fff;
  dl {
    width: 100%;
    margin: 5px 0;
    height: auto;
    display: flex;
    dt {
      @include wh (88px,88px);
      border-radius: 8px;
      overflow: hidden;
      margin-right: 8px;
      img {
        @include wh(80px,80px);
        display: block;
      }
    }
    dd {
      @include flex(space-between,start,column);
      flex: 1;
      // padding-right: 5px;
      position: relative;
      h2 {
        font-size: 14px;
        line-height: 1.5;
      }
      p {
        font-size: 12px;
        .price {
          color: $color-primary;
          b {
            font-size: 18px;
            font-weight: bold;
          }
        }
        .oldPrice {
          font-size: 12px;
          color: #a8a8a8;
          margin-left: 8px;
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
</style>