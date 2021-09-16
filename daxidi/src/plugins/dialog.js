import Dialog from '@/components/Dialog'
import './dialog.scss'

export default {
  install (Vue) {
    Vue.prototype.$alert = function (str) {
      var wrap = document.createElement('div')
      var ComponentClass = Vue.extend(Dialog)
      var vm = new ComponentClass({
        propsData: {
          title: '消息',
          show: true
        }
      })
      // eslint-disable-next-line no-unused-vars
      const h = vm.$createElement
      
      const vnode = (
        <div class="alert">
          <div class="content">
            {str}
          </div>
          <footer>
            <button onclick={() => {
              // vm.propsData.show = false
              vm.$destroy()
            }}>确定</button>
          </footer>
        </div>
      )
      vm.$slots.default = vnode
      vm.$on('update:show', () => {
        vm.$destroy()
      })
      document.body.appendChild(wrap)
      vm.$mount(wrap)
    }
    Vue.prototype.$confirm = function (str) {
      var wrap = document.createElement('div')
      var ComponentClass = Vue.extend(Dialog)
      var vm = new ComponentClass({
        propsData: {
          // title: '消息',
          show: true
        }
      })
      const h = vm.$createElement
      return new Promise((resolve, reject) => {
        const vnode = (
          <div class="confirm">
            <div class="content">
              {str}
            </div>
            <footer>
              <button onclick={() => {
                reject()
                vm.isShow = false
              }}>取消</button>
              <button onclick={() => {
                resolve()
                vm.isShow = false
              }}>确定</button>
            </footer>
          </div>
        )
        vm.$slots.default = vnode
        vm.$on('update:show', () => {
          vm.$destroy()
        })
        document.body.appendChild(wrap)
        vm.$mount(wrap)
      })
    }
  }
}
