'use strict';
const Service = require('egg').Service;

// 分类列表
const arr2tree = arr => {
  const newArr = []
  const arrObj = {}
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

const selectChildrenId = (tree, id, flag = false) => {
  let arr = [];
  for (let i = 0; i < tree.length; i++) {
    if (flag) {
      arr.push(tree[i].categoryId);
      if (tree[i].children) {
        arr = arr.concat( (tree[i].children, id, true));
      }
    } else {
      if (tree[i].categoryId * 1 === id * 1) {
        arr.push(tree[i].categoryId);
        if (tree[i].children) {
          arr = arr.concat(selectChildrenId(tree[i].children, id, true));
        }
        break;
      } else {
        if (tree[i].children) {
          arr = arr.concat(selectChildrenId(tree[i].children, id, false));
        }
      }
    }
  }
  return arr
};
class ProductService extends Service {
  async category() {
    const data = await this.app.mysql.select('category');
    return data;
  }
  async list({ page = 1, page_size = 10, categoryId}) {
    const category = await this.category();
    const tree = arr2tree(category);
    const ids = selectChildrenId(tree,categoryId)
    const data = await this.app.mysql.select('product', {
      where: {
        categoryId: ids
      },
      limit: page_size*1,//返回数据量
      offset: (page - 1) * page_size,//数据偏移量
    })
    return data.map(item => ({
      ...item,
      images: JSON.parse(item.images),
      promotionInfoList: JSON.parse(item.promotionInfoList),
    }))
  }
  
  async detail({id}) {
    const data = await this.app.mysql.get('product', {id})
    return {
      ...data,
      images: JSON.parse(data.images),
      promotionInfoList: JSON.parse(data.promotionInfoList),
    }
  }
}
/* class ProductService extends Service {
  async category() {
    const data = await this.app.mysql.select('category');
    return data;
  }
  async list({page=1,page_size=10}) {
    const data = await this.app.mysql.select('product', {
      limit: page_size*1,//返回数据量
      offset: (page - 1) * page_size,//数据偏移量
    })
    return data.map(item => ({
      ...item,
      images: JSON.parse(item.images),
      promotionInfoList: JSON.parse(item.promotionInfoList),
    }))
  }
  
  async detail({id}) {
    const data = await this.app.mysql.get('product', {id})
    return {
      ...data,
      images: JSON.parse(data.images),
      promotionInfoList: JSON.parse(data.promotionInfoList),
    }
  }
} */

module.exports = ProductService;