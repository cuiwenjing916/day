<template>
  <div class="number-input" :class="[size]">
    <a class="decrease" href="javascript:;" @click="decrease">-</a>
    <input v-model="val" />
    <a class="increase" href="javascript:;" @click="increase">+</a>
  </div>
</template>

<script>
export default {
  name: 'number',
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    val: function (newValue) {
      this.$emit('input', newValue)
    },
    value: function (newValue) {
      this.val = newValue
    }
  },
  methods: {
    increase () {
      this.val += 1
    },
    decrease () {
      this.val -= 1
      if (this.val <= 0) {
        this.val = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.number-input {
  @include flex();
  a {
    @include wh(32px, 32px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    font-size: 24px;
    text-decoration: none;
    color: #333;
  }
  input {
    @include wh(64px, 32px);
    padding: 0;
    border: 0;
    outline: 0;
    text-align: center;
    background: #f2f2f2;
    margin: 0 2px;
  }
  &.min {
    a {
      @include wh(24px,24px);
    }
    input {
      @include wh(40px,24px);
    }
  }
}
</style>

<!--
  开发组件的第一步就是设计组件用例
  <input-number v-model="val" :disabled="true" />
-->
