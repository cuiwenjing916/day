<template>
  <div class="card">
    <header v-if="title">
      <h2 class="title">{{title}}</h2>
      <router-link :to="url" class="more">
        查看全部 &gt;
      </router-link>
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return{

    }
  },
  props: ['url','title']
}
</script>

<style lang="scss" scoped>
  .card {
    @include wh(100%,auto);
    background: #fff;
    margin-top: 8px;
    header {
      @include wh(100%,48px);
      padding: 0 16px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        line-height: 16px;
        color: #323232;
        font-size: 16px;
      }
      .more {
        line-height: 14px;
        color: #8C8C8C;
        font-size: 16px;
      }
    }
  }
</style>