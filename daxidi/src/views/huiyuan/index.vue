<template>
  <div class="hui">
    <back-ground title="会员中心" />
    <sign-in />
    <order />
    <contact-info />
    <edition />
  </div>
</template>

<script>

import BackGround from './components/BackGround.vue'
import ContactInfo from './components/ContactInfo.vue'
import Edition from './components/Edition.vue'
import Order from './components/Order.vue'
import SignIn from './components/SignIn.vue'
import { mapState } from 'vuex'
export default {
  components: { BackGround, SignIn, Order, ContactInfo, Edition },
  name: 'huiyuan',
  computed: {
    ...mapState('user',['info'])
  }
}
</script>

<style lang="scss" scoped>
  .hui {
    width: 100%;
    background: #eee;
  }
</style>