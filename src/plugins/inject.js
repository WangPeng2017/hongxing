import axios from './axios'
global.axios = axios

export default {
  install: (Vue, options) => {
    // 需要挂载的都放在这里
    Vue.prototype.$axios = axios
    Vue.prototype.$get = axios.get
    Vue.prototype.$all = axios.all
    Vue.prototype.$post = axios.post
    Vue.prototype.$form = axios.form
  }
}
