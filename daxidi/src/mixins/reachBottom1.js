const reachBottom = {
  methods: {
    scroll () {
      var pageHeight = document.body.offsetHeight
      var scrollTop = document.querySelector('html').scrollTop
      var windowHeight = window.innerHeight
      if (pageHeight - scrollTop <= windowHeight + this.onReachBottomDis) {
        this.onReachBottom()
      }
    },
    initEvent () {
      if (this.onReachBottomDis) {
        window.addEventListener('scroll', this.scroll)
      }
      if (this.scroll) {
        window.addEventListener('scroll', this.scroll)
      }
    }
  },
  mounted () {
    this.initEvent()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}

export default (Vue) => {
  Vue.mixin(reachBottom)
  Vue.config.optionMergeStrategies.onReachBottom = function (toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
  }
}
