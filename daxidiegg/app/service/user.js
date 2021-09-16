'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find(where) {
    const data = await this.app.mysql.get('user', where);
    return data;
  }
  async create(params) {
    const data = await this.app.mysql.insert('user', params);
    return data;
  }
}

module.exports = UserService;