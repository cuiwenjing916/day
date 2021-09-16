<template>
  <div class="left-menu">
    <nav>
      <a
      href="javascript:;"
      v-for="(item,index) in list"
      :key="item.categoryId"
      :class="{active: activeIndex === index}"
      @click="change(item,index)"
      >
        {{item.categoryName}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'left-menu',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (item,index) {
      this.$emit('change',item)
      this.activeIndex = index
    }
  },
}
</script>

<style lang="scss" scoped>
.left-menu {
  width: 80px;
  position: fixed;
  left: 0;
  bottom: 48px;
  top: 58px;
  background: #f7f7f7;
  overflow: auto;
  a {
    @include wh (100%,48px);
    line-height: 48px;
    font-size: 13px;
    display: block;
    text-align: center;
    &.active {
      background: #fff;
      color: #333;
      font-weight: bold;
      &::after {
        content:'';
        width: 3px;
        height: 100%;
        background: chartreuse;
      }
    }
  }
}
</style>