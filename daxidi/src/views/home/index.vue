<template>
  <div class="wrap">
    <al-banner :img="banners" class="banner" />
    <!-- <al-nav :nav="nav" class="nav" /> -->
    <menus />
    <al-list :title="title" :list="recommend" />
    <al-list title="人气推荐" :list="newproducts" />
    <div class="footers">
      <img src="../../static/img/dacidi.png" />
      <!-- {{info.phone}}1 -->
    </div>
  </div>
</template>

<script>
import Menus from './components/Menus'
import AlNav from './components/Nav/index'
import axios from 'axios'
// import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    AlNav,
    Menus
  },
  data () {
    return {
      params: {
        page:1,
        page_size:4
      },
      banners:[
        /* {
          img: 'https://b1-q.mafengwo.net/s17/M00/EC/10/CoUBXmEbwA-AUxDbACPFTEp0Y4g779.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90',
        },
        {
          img: 'https://p1-q.mafengwo.net/s18/M00/55/BF/CoUBYGEc8muAa38fACjBaohYv7A558.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90',
        } */
      ],
      nav:[
        {
          path: '/integral',
          id:'1',
          img:'../../../../static/img/icon／入口／积分商城备份 2@2x.png',
          h2:'积分商城1',
          p: '超值美食等你说'
        },
        {
          id:'2',
          path: '/gift',
          img:'../../../../static/img/icon／入口／积分商城备份 2@2x.png',
          h2:'礼品卡',
          p: '超值美食等你说'
        },
        {
          id:'3',
          path: '/shibboleth',
          img:'../../../../static/img/icon／入口／积分商城备份 2@2x.png',
          h2:'口令',
          p: '超值美食等你说'
        },
        {
          id:'4',
          path: '/menus',
          img:'../../../../static/img/icon／入口／积分商城备份 2@2x.png',
          h2:'菜谱',
          p: '超值美食等你说'
        }
      ],
      title: '新品推荐',
      title12: '人气推荐',
      list: [],
      newproducts:[],
      recommend: []
    }
  },
  /* computed: {
    ...mapState('user',['info'])
  }, */
  methods: {
    fetchProducts () {
      this.$axios.get('/list', this.params).then((res) => {
        this.list = this.list.concat(res.data)
        
      })
    },
    /* onReachBottom () {
      this.params.page += 1
      this.fetchProducts()
    } */
  },
  created () {
    axios.get('/api/home').then((res) => {
      // console.log(res.data.data.banners)
      this.banners = res.data.data.banners
      this.newproducts = res.data.data.newproducts
      this.recommend = res.data.data.recommend
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  .banner {
    width: 100%;
    height: 250px;
  }
  .nav {
    width: 100%;
    background: #eee;
    z-index: 100;
  }
  .footers{
    width: 100%;
    // padding: .08rem 0;
    background: #eee;
    img {
      margin-top: 15px;
    }
  }
}
</style>