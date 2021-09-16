'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    const banners = await ctx.service.home.banner()
    const products = await ctx.service.home.product()
    
    ctx.body = {
      code: 1,
      data: {
        banners,
        recommend: products.filter((item,index) => index<=3),
        newproducts: products.filter((item, index) => index > 3)
      }
    }
  }
}

module.exports = HomeController;
