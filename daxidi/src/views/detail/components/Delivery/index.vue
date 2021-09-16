<template>
  <div class="delivety">
    <span>配送</span>
    <p>普通快递·免运费</p>
  </div>
</template>

<script>
export default {
  name: 'delivery',

}
</script>

<style lang="scss" scoped>
.delivety {
  width: 100%;
  height: .3rem;
  display: flex;
  align-items: center;
  @include font;
  margin: 10px 0;
  background: #fff;
  span {
    width: .3rem;
    color: #ccc;
    margin: 0 .15rem;
  }
  p {
    color: #000;
  }
}
</style>