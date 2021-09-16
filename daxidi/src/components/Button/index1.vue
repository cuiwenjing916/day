<template>
  <button
    class="al-btn"
    :class="className"
    :type="nativeType"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'al-button',
  props: {
    size: {
      type: String,
      default: '',
      validator (val) {
        if (['medium', 'small', 'mini'].indexOf(val) === -1 && val !== '') {
          return false
        }
        return true
      }
    },
    type: {
      type: String,
      default: '',
      validator (val) {
        if (['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(val) === -1 && val !== '') {
          return false
        }
        return true
      }
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    text: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: '',
      validator (val) {
        if (['button', 'submit', 'reset'].indexOf(val) === -1 && val !== '') {
          return false
        }
        return true
      }
    }
  },
  computed: {
    className () {
      return {
        [this.size]: true,
        [this.type]: true,
        plain: this.plain,
        round: this.round,
        circle: this.circle,
        loading: this.loading,
        disabled: this.disabled,
        text: this.text,
        [this.icon]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.al-btn {
  width: 100%;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
$type: (
  primary: #409eff,
  success: #67c23a,
  info: #909399,
  warning: #e6a23c,
  danger: #f56c6c
);

@each $className, $color in $type{
  .al-btn.#{$className} {
    color: #fff;
    background-color: $color;
    border-color: $color;
    &:hover {
      background-color: transparentize($color, 0.2);
    }
    &.plain {
      background-color: transparentize($color, 0.8);
      color: $color;
      &:hover {
        background-color: $color;
        color: #fff;
      }
    }
    &.round {
      border-radius: 20px;
    }
    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
    &.text {
      background: none;
      border: 0;
      color: $color;
    }
  }
}
</style>
