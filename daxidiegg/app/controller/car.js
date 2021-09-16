'use strict';

const Controller = require('egg').Controller;

class CarController extends Controller {
  async add() {
    const { ctx } = this;
    const { product_id, num} = ctx.request.body;
    const user_id = ctx.user.id;
    try {
      await this.service.car.add({
        product_id,
        user_id,
        num
      })
      ctx.body = {
        code: 1,
        massage: '添加成功',
      }
    } catch (e) {
      ctx.throw(422,'添加失败')
    }
  }
  async list() {
    const { ctx } = this;
    const user_id = ctx.user.id;
    const data = await this.service.car.list(user_id);
    ctx.body = {
      code: 1,
      data,
    }
  }
  async update() {
    const {ctx} = this;
    const query = ctx.request.body
    await this.service.car.update(query); 
    ctx.body = {
      code: 1,
      message: '更新成功',
    }
  }
}

module.exports = CarController;
