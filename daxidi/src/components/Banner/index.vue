<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper" v-if="img.length > 1">
      <swiper-slide
      v-for="(item,index) in img"
      :key="index"
      >
        <img :src="item.image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    --></swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: 'banner',
  components: {
    swiper,
    swiperSlide
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
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  props: {
    img: {
      type: Array,
      default: () => []
    }
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
  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
    /* height: 200px; */
    height: 100%;
    background: pink;
  }
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    height: 100%;
    /* line-height: 200px; */
    /* min-height: 200px; */
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>