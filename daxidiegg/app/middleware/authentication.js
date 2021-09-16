'use strict';
const jwt = require('jsonwebtoken');
module.exports = () => {
  const whiteList = [
    '/api/home',
    '/api/product/category',
    '/api/product',
    '/api/product/:id',
    '/api/message/code',
    '/api/user/login'
  ];
  return async (ctx,next) => {
    const token = ctx.cookies.get('token');
    let url = ctx.req._parsedUrl.pathname;
    console.log(ctx.req._parsedUrl,'111',token);
    if (whiteList.includes(url)) {
      if (token) {
        const user = jwt.verify(token, 'cuiwenjing');
        ctx.user = user;
      }
      await next();
    } else {
      if (token) {
        try {
          const user = jwt.verify(token, 'cuiwenjing');
          ctx.user = user;
          await next();
        } catch (e) {
          ctx.throw(422, '用户登录已失效请重新登录');
        }
      } else {
        ctx.throw(401, '用户未登录')
      }
    }
  }
}
// export default authentication