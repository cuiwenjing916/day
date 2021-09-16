<template>
  <div class = "goods-comment">
    <div class = "head">
      <h2>
        商品评价
        <span>(16)</span>
      </h2>
      <a href = "javascript:;">查看全部》</a>
    </div>
    <div class = "content">
      <div class = "dl-box" v-for = "(item,i) in commentList" :key="i">
        <dl>
          <dt>
            <img :src="item.img" />
          </dt>
          <dd>
            <p>{{item.idName}}</p>
            <p>{{item.rate}}</p>
            <p>{{item.word}}</p>
          </dd>
        </dl>
        <div class = "time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-comment',
  data () {
    return {
      commentList: [
        {
          img: 'https://img.zcool.cn/community/01e8c46131f2c411013eaf709cc510.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          idName: '金****天',
          rate: '❤❤❤❤❤',
          word: '强烈推荐，真的好吃',
          time: '2020.08.22'
        },
        {
          img: 'https://img.zcool.cn/community/01e8c46131f2c411013eaf709cc510.jpg@260w_195h_1c_1e_1o_100sh.jpg',
          idName: '明****天',
          rate: '❤❤❤❤❤',
          word: '强烈推荐，真的好吃',
          time: '2020.08.22'
        }
      ]
    }
  }
}
</script>

<style lang= "scss" scoped>
.goods-comment{
  width: 100%;
  background: #fff;
  height: 230px;
  .head{
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2{
      font-size: 15px;
      font-weight: 550;
      display: flex;
      margin-left: 10px;
      padding-top: 10px;
      span{
        font-size: 15px;
        color: #888;
        margin-left: 5px;
      }
    }
    a{
      font-size: 14px;
      color: #888;
      margin-right: 12px;
      margin-top: 10px;
    }
  }
  .content{
    width :100%;
    height: 200px;
    .dl-box{
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: space-between;
      dl{
        width: 100%;
        display: flex;
        margin-top: 12px;
        dt{
          width: 50px;
          height: 50px;
          margin-left: 10px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: block;
          }
        }
        dd {
          margin-left: 13px;
          p{
            font-size: 14px;
            color: #333;
            text-align: left;
          }
          p:nth-child(2) {
            color: orange;
          }
        }
      }
      .time{
        font-size: 14px;
        color: #333;
        margin-right: 10px;
        line-height: 100px;
      }
    }
  }
}
</style>
