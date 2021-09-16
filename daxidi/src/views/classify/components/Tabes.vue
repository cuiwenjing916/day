<template>
  <div class="tabs">
    <div class="header">
      <nav class="nav">
        <a href="#"
        v-for="(item,index) in navs"
        :key="item._uid"
        @click="activeIndex = index"
        :class="{active: activeIndex === index} "
        >{{item.label}} </a>
      </nav>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'Tabs',
  data () {
    return {
      navs: [],
      activeIndex:0
    }
  },
  mounted() {
    this.navs = this.$children
    this.$children.forEach((child,index) => {
      child.index = index
    });
  },
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 58px;
  position: relative;

  .nav{
    width: 100%;
    height: 58px;
    position: fixed;
    background: #fff;
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    a {
      border-bottom: solid 2px transparent;
      margin: 0 16px;
      display: inline-block;
      height: 56px;
      font-size: 16px;
      line-height: 56px;
    }
    .active{
      border-bottom: solid 2px #FF712B;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
.content {
  width: 100%;
  position: relative;
}
</style>