import Vue from 'vue'
import App from './App.vue'
import store from './js/myVueStore'

//https://kr.vuejs.org/v2/api/index.html
Vue.config.productionTip = false

//root Vue 객체 
new Vue({
  //모든 자식 component에서 this.$store로 access 
  store,
  render: h => h(App),
}).$mount('#app')
