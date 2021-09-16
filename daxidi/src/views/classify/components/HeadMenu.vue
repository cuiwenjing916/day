<template>
  <div class="tab">
    <tabes class="tabs">
      <tabs-pane class="con" label="麦德龙">
        <left-menu :list="menu" @change="menuChange" />
        <div class="content">
          <right-menu :list="submenu" @change="menuChange"></right-menu>
          <al-product-list :list="products" />
        </div>
      </tabs-pane>
      <tabs-pane class="con" label="海淘购">海淘购</tabs-pane>
    </tabes>
    <!-- <img class="search" src="../../../static/images/sou.png"/> -->
  </div>
</template>

<script>
import Tabes from '../components/Tabes'
import TabsPane from '../components/TabsPane'
import LeftMenu from '../components/Left-menu'
import RightMenu from './RightMenu.vue';
export default {
  name: "head-menu",
  components: {
    Tabes,
    TabsPane,
    LeftMenu,
    RightMenu
  },
  data () {
    return {
      onReachBottomDistance: 10,
      menu: [],
      submenu: [],
      flag:true,
      params: {
        categoryId: '',
        page:1,
        page_size:20
      },
      products: []
    }
  },
  watch: {
    params: {
      handler: 'getProuctList',
      deep: true
    }
  },
  methods: {
    async getCategoryMenu () {
      const res = await this.$api.product.category()
      this.menu = res.data.data
      this.submenu = [{
        categoryId: this.menu[0].categoryId,
        categoryName: '全部'
      }].concat(this.menu[0].children)
    },
    async getProuctList () {
      if (!this.flag) return;
      this.flag = false
      const res = await this.$api.product.list(this.params)
      if (this.params.page === 1) {
        this.products = res.data.data
      } else {
        this.products = this.products.concat(res.data.data)
      }
      this.flag = true
      
    },
    menuChange (item) {
      this.params.categoryId = item.categoryId
      this.params.page = 1
      document.querySelector('html').scrollTo(0,0)
      if (item.parentId * 1 === 0){
        if (item.children) {
          this.submenu = [{
            categoryId: item.children.categoryId,
            categoryName: '全部'
          }].concat(item.children)
        } else {
          this.submenu = [{
            categoryId: item.categoryId,
            categoryName: '全部'
          }]
        }
      }
    },
    /* onReachBottom () {
      // console.log(1234);
    if (this.flag) {
      this.params.page += 1
    }
    // console.log(this.params.page);
  } */
  },
  created() {
    this.getCategoryMenu()
    this.getProuctList()
  },
  onReachBottom () {
    if (this.flag) {
      this.params.page += 1
    }
    console.log(this.flag);
  }
};
</script>

<style lang="scss" scoped>
.tab {
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; */
  .search {
    width: 20px;
    height: 20px;
    display: block;
    position: fixed;
    right: 10px;
    top: 10px;
  }
  .con {
    // height: 100vh;
    @include flex();
    .content {
      flex: 1;
      padding-left: 80px;
    }
  }
}
</style>