<template>
  <div class="shop">
    <delete-all />
    <goods-list />
    <cashier />
  </div>
</template>

<script>
import Cashier from './components/Cashier.vue'
import DeleteAll from './components/DeleteAll.vue'
import GoodsList from './components/GoodsList'
export default {
  name: 'shopping-cart',
  components: {
    GoodsList,
    Cashier,
    DeleteAll
  }
}
</script>

<style lang="scss" scoped>
  
</style>