<template>
  <div class="from-item">
    <label v-if="label">{{label}}</label>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-item',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .from-item {
    @include wh(100%, 48px);
    border-bottom: 1px solid #e6e6e6;
    margin-top: 20px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      width: 20%;
      font-size: 14px;
      line-height: 48px;
      display: block;
    }
    .content {
      // width: 100%;
      display: flex;
    }
  }
</style>