<template>
  <div @click.stop="add">
    <slot></slot>
    <al-popup :show.sync="isShow">
      <div  class="content">
        <dl class="product">
          <dt><img :src="productInfo.img" /></dt>
          <dd>
            <span class="price">
              <i>￥</i>
              <b>{{productInfo.price}} </b>
            </span>
            <span class="oldPrice">库存{{productInfo.price}}</span>
          </dd>
        </dl>
        <form-item label="购买数量" class="num-box">
          <al-number v-model="num"></al-number>
        </form-item>
        <form-item class="btn-group">
          <al-button type="danger" plain @click="addCar">加入购物车</al-button>
          <al-button type="danger">立即购买</al-button>
        </form-item>
      </div>
    </al-popup>
  </div>
</template>

<script>
import FormItem from '../../components/Form/FormItem'
import AlButton from '../../components/Button/index'
export default {
  name: 'add-car',
  components: {
    FormItem,
    AlButton
  },
  data () {
    return {
      isShow: false,
      num: 1
    }
  },
  props: {
    productInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    add () {
      this.isShow = true
    },
    addCar () {
      console.log(this.productInfo.id,this.productInfo);
      this.$store.dispatch('car/addCarProduct',{
        num: this.num,
        product_id: this.productInfo.id
      }).then(() => {
        this.isShow = false
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  box-sizing: border-box;
  .product {
    width: 100%;
    display: flex;
    dt {
      @include wh(120px,120px);
      img {
        @include wh(100%,100%);
      }
    }
    dd {
      font-size: 16px;
      padding-left: 10px;
      .price {
        color: $color-primary;
        display: block;
        b {
          font-size: 28px;
          font-weight: bold;
        }
      }
      .oldPrice {
        font-size: 12px;
        margin-top: 10px;
        color: #a8a8a8;
        margin-left: 8px;
      }
    }
  }
  .num-box {
    width: 100%;
    display: flex;
    /* /deep/.content {
      display: flex;
    } */
  }
  .btn-group {
    width: 100%;
    border: 0;
    /deep/.content {
      width: 100%;
      .al-btn:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .al-btn:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>