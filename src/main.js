// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import header from './components/header'
import footer from './components/footer'

Vue.component("Header", header)
Vue.component("Footer", footer)

Vue.config.productionTip = false

// 设置路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.getters.getState.admin_token !== null) {
            /* 管理员已登录 */
            next()
        } else {
            next({
                path: "/adminlogin",
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})