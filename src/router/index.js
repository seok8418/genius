import Vue from 'vue'
import Router from 'vue-router'
import Contents from '@/components/Contents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: Contents
    }
  ]
})
