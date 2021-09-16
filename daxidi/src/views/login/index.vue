<template>
  <div class="login-page">
    <div class="header">
      <div class="bg"></div>
      <div class="logo">
        <img src="../../static/img/dacidi.png" />
      </div>
    </div>
    <div class="login-box">
      <h2 class="title">登录</h2>
      <forms>
        {{formData.phone}}
        <form-item><al-inputs v-model="formData.phone" type="phone" placeholder="请输入手机号码" /></form-item>
        <form-item type="text">
          <al-inputs v-model="formData.code" placeholder="请输入验证码" />
          <al-button type="danger" :disabled="code_disabled" text @click="send_message_code">
            <template v-if="downTime === 0">获取验证码</template>
            <template v-else>{{downTime}}秒后重新发送</template>
          </al-button>
        </form-item>
        <al-button class="login-btn" type="danger" :disabled="login_disabled" @click="login">登录</al-button>
      </forms>
    </div>
  </div>
</template>

<script>
import Forms from '../../components/Form/Forms'
import FormItem from '../../components/Form/FormItem'
import AlButton from '../../components/Button/index'
export default {
  name: 'login',
  components: {
    Forms,
    FormItem,
    AlButton
  },
  data () {
    return {
      downTime: 0,
      formData: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    login_disabled () {
      return !(this.formData.phone && this.formData.code)
    },
    code_disabled () {
      const res = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      return !(this.formData.phone && res.test(this.formData.phone)) || this.downTime !== 0
    }
  },
  methods: {
    async send_message_code () {
      this.downTime = 10
      const interval = setInterval(() => {
        this.downTime -= 1
        if (this.downTime === 0) {
          clearInterval(interval)
        }
      },1000)
      const res = await this.$api.user.code({
        phone: this.formData.phone
      })
      this.formData.code = res.data.message.replace(/\S{1,}(\d{6})\S{1,}/, '$1')
      // this.formData.code = res.data.message.replace(/\S{1,}(\d{6})\S{1,}/,'$1')
      // console.log(res.data,this.formData.code);
    },
    login () {
      this.$store.dispatch('user/login',this.formData).then((res) => {
        const callbackUrl = this.$route.query.callbackUrl
        if (callbackUrl) {
          this.$router.replace(callbackUrl)
        } else {
        this.$router.replace('/home')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .login-page {
    @include wh(100%,100vh);
    .header {
      @include wh(100%,332px);
      overflow: hidden;
      position: relative;
      .bg {
        @include wh(100%,332px);
        background-image: linear-gradient(0deg,#ff66aa 0,#ff4488 100%);
        border-radius: 100%;
        transform-origin: bottom center;
        transform: scale(2);
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .logo {
        position: relative;
        text-align: center;
        img {
          width: 240px;
          height: 60px;
          margin-top: 132px;
        }
      }
    }
    .login-box {
      width: 351px;
      height: 388px;
      background: #fff;
      margin: 0 auto;
      border-radius: 8px;
      margin-top: -100px;
      position: relative;
      padding: 24px;
      box-sizing: border-box;
      .title {
        font-size: 20px;
        color:#333;
      }
    }
    .login-btn {
      margin-top: 20px;
    }
  }
</style>