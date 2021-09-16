'use strict';
const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;

const random = (min,max) => {
  return Math.round((max-min) * Math.random())
}
const randomGroupNum = len => {
  let code = '';
  while (code.length < len) {
    code += random(0,9)
  }
  return code;
}
// let randomCode = ''
class UserController extends Controller {
  async send_message_code() {
    const { ctx } = this;
    const {phone} = ctx.query;
    if (phone) {
      ctx.session.randomCode = randomGroupNum(6)
      ctx.body = {
        code: 1,
        // message: `大希地，验证码${randomCode}`,
        message: `大希地欢迎你，验证码是【${ctx.session.randomCode}】`,
      }
    } else {
      ctx.throw(422,'请输入手机号')
    }
    
  }
  async login() {
    const { ctx } = this;
    const {code,phone} = ctx.request.body;
    if (code === ctx.session.randomCode) {
      const user = await this.service.user.find({ phone });
      const token = jwt.sign({ ...user },'cuiwenjing')
      /* ctx.cookies.set('token', 11, {
        httpOnly: false,
      }) */
      if (user) {
        ctx.cookies.set('token', token, {
          httpOnly: false,
        })
        ctx.body = {
          code: 1,
          message: '登录成功'
        }
      } else {
        await this.service.user.create({
          phone
        });
        const user = await this.service.user.find({ phone });
        const token = jwt.sign({ ...user },'cuiwenjing')
        ctx.cookies.set('token', token,{
          httpOnly: false,
        })
        ctx.body = {
          code: 1,
          message: '登陆成功'
        }
      }
    } else {
      ctx.throw(422,'验证码已过期')
    }
  }
  async info() {
    const { ctx } = this;
    ctx.body = ctx.user
    console.log(ctx.user,'123');
  }
}

module.exports = UserController;
