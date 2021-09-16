<template>
<transition
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <div class="notice-wrap" v-show="show" @touchmove.prevent @click='close'>
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
    <div class="notice-box" v-show="show" @click.stop>
      <header class="notice-header">
        <span></span>
        <h2>{{title}}</h2>
        <i @click="close" class="iconfont icon-guanbi1"></i>
      </header>
      <div class="notice-content">
        <slot></slot>
      </div>
    </div>
    </transition>
  </div>
</transition>
</template>

<script>

export default {
  name: 'notice',
  components: {

  },
  props: {
    title: {
      type: String,
      default: ''
    },
    show:  Boolean,
    index: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    value: {
      default: ''
    }
  },
  data (){
    return{
      isShow: false
    }
  },
  methods: {
    close() {
      this.$emit('update:show',false)
    }
  },
  
}
</script>

<style scoped lang="scss"> 
.notice-wrap{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0,0.2);
  z-index: 200;
  .notice-box {
    width: 100%;
    height: auto;
    min-height: 200px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    header{
      display: flex;
      padding: 10px;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      h2{
        font-size: 16px;
      }
    }
  }
}
.fade-enter-active,.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0; 
}
</style>