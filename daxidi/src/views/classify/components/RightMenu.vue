<template>
  <div class="right-menu">
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
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'right-menu',
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
  watch: {
    list () {
      this.activeIndex = 0
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
.right-menu {
  width: 100%;
  position: fixed;
  top: 58px;
  margin-bottom: 48px;
  background: #fff;
  overflow: auto;
  z-index: 100;
  nav {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    background: #fff;
  a {
    line-height: 36px;
    font-size: 12px;
    display: block;
    flex-shrink: 0;
    text-align: center;
    color: #888;
    margin: 0 5px;
    z-index: 1000;
    &.active {
      background: #fff;
      color: #333;
      font-weight: bold;
    }
  }
  }
}
</style>