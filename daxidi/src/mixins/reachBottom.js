
const reachBottom = {
  methods: {
    // scroll() {
    //   var pageHeight = document.body.offsetHeight
    //   // console.log(pageHeight);
    //   var scrollTop = document.querySelector('html').scrollTop
    //   // console.log(scrollTop);
    //   var windowHeight = window.innerHeight
    //   // console.log(windowHeight);
    //   if (pageHeight - Math.ceil(scrollTop) <= windowHeight + this.onReachBottomDistance) {
    //     console.log(this.onReachBottomDistance);
    //     this.$options.onReachBottom.call(this)
    //   }
    // },
    scroll() {
      var pageHeight = document.body.offsetHeight
      var scrollTop = document.querySelector('html').scrollTop
      var windowHeight = window.innerHeight
      if (pageHeight - scrollTop <= windowHeight + this.onReachBottomDistance) {
        this.$options.onReachBottom.call(this)
      }
    },
    initEvent() {
      if (this.onReachBottomDistance) {
        window.addEventListener('scroll', this.scroll)
      }
      if (this.scroll) {
        window.addEventListener('scroll', this.scroll)
      }
    }
  },
  mounted() {
    this.initEvent()
  },
  destroyed() {
    window.removeEventListener('scroll', this.scroll)
  },
}

export default (Vue) => {
  Vue.mixin(reachBottom)
  Vue.config.optionMergeStrategies.onReachBottom = function (toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
  }
}
/* const reachBottom = {
  methods: {
    scroll () {
      var pageHeight = document.body.offsetHeight
      var scrollTop = document.querySelector('html').scrollTop
      var windowHeight = window.innerHeight
      if (pageHeight - Math.ceil(scrollTop) <= windowHeight + this.onReachBottomDistance) {
        console.log(pageHeight - Math.ceil(scrollTop));
        this.$options.onReachBottom().call(this)
      }
      if (this.$options.onScroll) {
        this.$options.onScroll.call(this)
      }
    },
    initEvent() {
      if (this.onReachBottomDistance) {
        window.addEventListener('scroll', this.scroll)
      }
      if (this.$options.onScroll) {
        window.addEventListener('scroll', this.scroll)
      }
    }
  },
  mounted() {
    this.initEvent()
  },
  destroyed() {
    window.removeEventListener('scroll', this.scroll)
  },
}  */
/* export default (Vue) => {
  Vue.mixin(reachBottom)
  Vue.config.optionMergeStrategies.onReachBottom = function(toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
  }
} */