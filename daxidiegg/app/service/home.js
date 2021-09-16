'use strict';
const Service = require('egg').Service;

class HomeService extends Service {
  async banner() {
    // const user = await this.ctx.db.query('select * from banner');
    const data = await this.app.mysql.select('banner');
    return data;
  }
  async product() {
    const data = await this.app.mysql.select('product',{
      where: {
        recommend: '1',
      }
    });
    return data.map(item => ({
      ...item,
      images: JSON.parse(item.images),
      promotionInfoList: JSON.parse(item.promotionInfoList),
    }))
  }
}

module.exports = HomeService;