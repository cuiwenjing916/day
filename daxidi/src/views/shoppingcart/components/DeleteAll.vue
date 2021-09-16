<template>
  <div class="head">
    <p>
      <img src="../../../static/images/carlogo.png" />
      大希地
      </p>
    <span>删除</span>
  </div>
</template>

<script>
export default {
  name: 'delete-all',

}
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  top: 0;
  color: #323232;
  font-size: 14px;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 100;
  background: #fff;
  p {
    img {
      width: 18px;
    }
  }
}
</style>