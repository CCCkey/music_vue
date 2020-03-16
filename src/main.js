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



// 获取ad_token方法

let getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
Vue.prototype.getCookie = getCookie

// 设置路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (getCookie("user_token")) { // determine if there has token
            /* 用户已登录 */
            next();
            if (getCookie("admin_token")) {
                /* 管理员已登录 */
                next()
            } else {
                next({
                    path: "/adminlogin",
                    query: { redirect: to.fullPath }
                })
            }
        } else {
            next({
                path: "/login",
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