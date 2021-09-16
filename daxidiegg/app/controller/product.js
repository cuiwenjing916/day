'use strict';

const Controller = require('egg').Controller;
// const jwt = require('jsonwebtoken');
// 分类列表
const arr2tree = arr => {
  const newArr = []
  const  arrObj = {}
  arr.forEach(item => {
    arrObj[item.categoryId] = item
  });
  arr.forEach(item => {
    if (item.parentId * 1 === 0) {
      newArr.push(item)
    } else {
      const parent = arrObj[item.parentId]
      if (parent.children) {
        parent.children.push(item)
      } else {
        parent.children = [item]
      }
    }
  });
  return newArr
}

class ProductController extends Controller {
  async category() {
    const { ctx } = this;
    const category = await ctx.service.product.category()
    ctx.body = {
      code: 1,
      data: arr2tree(category)
    }
  }
  // 商品
  async list() {
    const { ctx } = this;
    /* const token = ctx.cookies.get('token');
    const user = jwt.verify(token,'cuiwenjing');
    console.log(user); */
    const list = await ctx.service.product.list(ctx.query)
    // const list = await ctx.service.product.list()
    ctx.body = {
      code: 1,
      data: list
    }
  }
  //详情
  async detail() {
    const { ctx } = this;
    const detail = await ctx.service.product.detail(ctx.params)
    ctx.body = {
      code: 1,
      data: detail
    }
  }
}

module.exports = ProductController;
