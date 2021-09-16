import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: () => import('../views/main/index'),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'home',
          component: () => import('../views/home/index'),
          meta: {
            title: '首页'
          },
          children: [
          ]
        },
        {
          path: 'classify',
          component: () => import('../views/classify/index'),
          meta: {
            title: '分类'
          }
        },
        {
          path: 'shoppingcart',
          component: () => import('../views/shoppingcart/index'),
          meta: {
            title: '购物车',
            authority: true
          },
          children: [
            
          ]
        },
        {
          path: 'my',
          component: () => import('../views/my/index'),
          meta: {
            title: '我的'
          }
        },
        {
          path: 'huiyuan',
          component: () => import('../views/huiyuan/index'),
          meta: {
            title: '会员',
            authority: true
          }
        },
        
      ]
    },
    {
      path: '/detail/:id',
      component: () => import('../views/detail/index'),
      meta: {
        title: '详情'
      },
      children: [
        {
          path: 'commentes',
          component: () => import('../views/commentes/index'),
          meta: {
            title: '评论'
          }
        }
      ]
    },
    {
      path: '/integral',
      component: () => import('@/views/integral'),
      meta: {
        title: '积分商城'
      }
    },
    {
      path: '/gift',
      component: () => import('@/views/gift'),
      meta: {
        title: '礼品卡'
      }
    },
    {
      path: '/shibboleth',
      component: () => import('@/views/shibboleth'),
      meta: {
        title: '口令'
      }
    },
    {
      path: '/menus',
      component: () => import('@/views/menus'),
      meta: {
        title: '菜谱'
      }
    },
    {
      path: '/login',
      component: () => import('@/views/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/bay',
      component: () => import('../views/bay'),
      meta: {
        title: '付款'
      }
    }
  ]
})
router.afterEach((to, from, next) => {
  document.title = to.meta.title
})
router.beforeEach((to, from, next) => {
  const vm = router.app
  if (to.meta.authority) {
      if (vm.$store.state.user.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callbackUrl: to.path
        }
      })
    }
  } else {
    next()
  }
  
})
export default router
