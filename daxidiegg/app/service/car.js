'use strict';

const Service = require('egg').Service;

class CarService extends Service {
  async select(user_id, product_id) {
    const res = await this.app.mysql.get('car', {
      user_id,
      product_id
    })
    return res
  }
  async add({ user_id, product_id, num }) {
    const product = await this.select(user_id, product_id)
    if (product) {
      const res = await this.app.mysql.update('car', {
        id: product.id,
        num: product.num + num
      })
      return res
    }
    const res = await this.app.mysql.insert('car', {
      user_id,
      product_id,
      num
    })
    return res
  }
  async list(user_id) {
    // const sql = `
    //   SELECT
    //     car.id,
    //     car.num,
    //     car.active,
    //     product.name,
    //     product.price,
    //     product.img,
    //     car.product_id
    //   FROM
    //     car,
    //     product
    //   WHERE
    //     user_id=${user_id}
    //   AND
    //     car.product_id=product.id
    // `;
    const sql = `
      SELECT
        car.id,
        car.num,
        car.active,
        product.name,
        product.price,
        product.img,
        car.product_id
      FROM
        car
      INNER JOIN
        product
      ON
        car.product_id=product.id
      WHERE
        user_id=${user_id}
    `;
    const res = await this.app.mysql.query(sql)
    // const res = await this.app.mysql.select('car', {
    //   where: {
    //     user_id,
    //   }
    // });
    return res
  }
  async update(params) {
    const updateParams = {};
    for (const key in params) {
      if (key !== 'id') {
        updateParams[key] = params[key]
      }
    }
    const res = await this.app.mysql.update('car', updateParams, {
      where: {
        id: params.id
      }
    });
    return res
  }
  async detail(params) {
    const sql = `
    DELETE
    FROM car
    WHERE active='0' 
    AND num='0'
    `
    const res = await this.app.mysql.query(sql)
    return res
  }
}

module.exports = CarService;