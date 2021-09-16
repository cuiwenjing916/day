'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //主页面路由
  router.get('/api/home', controller.home.index);
  //
  router.get('/api/product/category', controller.product.category);
  //商品列表
  router.get('/api/product', controller.product.list);
  // 详情
  router.get('/api/product/:id', controller.product.detail);
  // 登录
  router.get('/api/message/code', controller.user.send_message_code);
  //添加用户信息
  router.post('/api/user/login', controller.user.login);
  // 用户
  router.get('/api/user', controller.user.info);
  // 添加商品
  router.post('/api/car/add', controller.car.add);
  // 获取商品列表
  router.get('/api/car',controller.car.list);
  // 更新商品列表
  router.put('/api/car', controller.car.update);
  // 加载分类数据
  // router.get('/api/test/product', controller.test.product);
  // router.get('/api/test/category', controller.test.category);
};