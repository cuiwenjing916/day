'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [ function(data) {
  let ret = '';
  for (const it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
  }
  return ret;
} ];

const insertCategory = (mysql, arr = [], ParentId = 0) => {
  console.log(mysql, arr);
  arr.forEach(async item => {
    const result = await mysql.insert('category', {
      categoryImgPathReal: '',
      categoryName: item.categoryName,
      ParentId,
    });
    if (item.childCategoryList) {
      insertCategory(mysql, item.childCategoryList, result.insertId);
    }
  });
};

class TestController extends Controller {
  async category() {
    axios.post('https://searchgw.dmall.com/mp/wareCategory/list', {
      param: JSON.stringify({
        from: 1,
        stores: [
          { businessCode: 1, description: '多点超市，2小时达', isDefault: true, label: 'https://img.dmallcdn.com/bizItem/201903/42e4e61f-d3f8-467d-b5da-08ad3d180cfa', logo: 'https://img.dmallcdn.com/bizItem/201901/7ea310a6-c184-47ce-ad55-4aae50a65535', name: '麦德龙', showType: 1, erpStoreId: 15549, url: 'https://cmsapi.dmall.com/app/web/json/86/15549', venderId: 86 },
          { businessCode: 2, description: '优质甄选，好货低价', label: 'https://img.dmallcdn.com/bizItem/201909/dc1774e5-5ad8-4945-88d0-06eb3e3c33cc', logo: 'https://img.dmallcdn.com/bizItem/201610/1bf901f7-a57f-4176-ad53-16d709a10322', name: '全球精选', showType: 1, erpStoreId: 454601, url: 'https://cmsapi.dmall.com/app/web/ysjson/52561/454601', venderId: 52561 },
          { businessCode: 3, logo: '', name: '海淘购', showType: 1, erpStoreId: 321041, url: 'https://cmsapi.dmall.com/app/web/json/1/321041', venderId: 1 },
        ],
      }),
      source: 2,
      tempid: 'C9826FB892D00002F1A51DF0ED0911D41630985038165',
      pubParam: {},
      d_track_data: JSON.stringify({
        session_id: 'C9828CE806E000024B145180192DAA20',
        uuid: 'C9826FB892D00002F1A51DF0ED0911D41630985038165',
        project: '微信商城', env: 'mweb', tdc: '', tpc: '',
      }),
    }).then(res => {
      // console.log(res)
      const category = res.data.data.wareCategory[0].categoryList;
      insertCategory(this.app.mysql, category, 0);
      // console.log(category);
    });
  }
  async product() {
    const { ctx } = this;
    // console.log(ctx.query);
    const res = await axios.post('https://searchgw.dmall.com/mp/search/wareSearch', {
      param: JSON.stringify({
        venderId: 86,
        storeId: 15549,
        businessCode: 1,
        from: 1,
        categoryType: 1,
        pageNum: 1,
        pageSize: 50,
        categoryId: ctx.query.categoryId,
        categoryLevel: 1,
      }),
      source: 2,
      tempid: 'C9826FB892D00002F1A51DF0ED0911D41630985038165',
      d_track_data: JSON.stringify({ session_id: 'C982E17C34A00002296B17808BC91DD0', uuid: 'C9826FB892D00002F1A51DF0ED0911D41630985038165', project: '微信商城', env: 'mweb', tdc: '', tpc: '' }),
    });
    console.log(res);
    const wareList = res.data.data.wareList;
    wareList.forEach(item => {
      axios.post('https://detail.dmall.com/waredetail/main', {
        param: JSON.stringify({
          storeId: item.storeId,
          skuId: item.sku,
          moduleCodes: 'description, slider',
          longitude: 121.360543,
          latitude: 37.470321,
        }),
        source: 2,
        tempid: 'C9827EF432D0000292BB15AD13A01739',
        d_track_data: JSON.stringify({
          session_id: 'C9828ABA44A0000218601D9F1BD45290',
          uuid: 'C9827EF432D0000292BB15AD13A01739',
          project: '微信商城', env: 'mweb', tdc: '', tpc: '',
        }),
      }).then(res => {
        axios.post('https://detail.dmall.com/waredetail/main', {
          param: JSON.stringify({
            storeId: item.storeId,
            skuId: item.sku,
            longitude: 121.360543,
            latitude: 37.470321,
          }),
          source: 2,
          tempid: 'C9827EF432D0000292BB15AD13A01739',
          d_track_data: JSON.stringify({
            session_id: 'C9828ABA44A0000218601D9F1BD45290',
            uuid: 'C9827EF432D0000292BB15AD13A01739',
            project: '微信商城', env: 'mweb', tdc: '', tpc: '',
          }),
        }).then(res2 => {
          const ware = res.data.data.moduleList.concat(res2.data.data.moduleList);
          // console.log(ware[0].data);
          this.app.mysql.insert('product', {
            name: item.wareName,
            price: item.warePrice,
            // price: (item.warePrice / 100).toFixed(2),
            img: item.wareImg,
            promotionInfoList: JSON.stringify(item.promotionWareVO.promotionInfoList),
            image: JSON.stringify(ware[2].data.wareImgList),
            detail: JSON.stringify(ware[0].data.description),
            categoryId: ctx.query.id * 1,
          });
        });
      });
    });
  }
}

module.exports = TestController;
