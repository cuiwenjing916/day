<template>
  <div class="tab-pane"
  v-show="$parent.activeIndex === index"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'TabsPane',
  props: {
    label: {
      type: String,
      default:''
    }
    
  },
  data () {
    return {
      index: 0
    }
  }
}
</script>

<style scoped lang="scss">

</style>

