<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper" v-if="images.length > 1">
      <swiper-slide
      v-for="(item,index) in images"
      :key="index"
      >
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
          type: 'fraction',//显示数字
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
}
</script>

<style scoped>
.recommendPage {
  position: relative;
  z-index: 2;
}
  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
    height: 200px;
    background: pink;
  }
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    line-height: 200px;
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    background: rgba(0,0,0,0.3);
    z-index: 10;
    width: 30px;
    border-radius: 10px;
    line-height: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>