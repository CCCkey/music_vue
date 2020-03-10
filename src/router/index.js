import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import musicPlay from '@/components/musicPlay'
import comments from '@/components/comments'
import adminLogin from '@/components/adminLogin'
import adminManage from '@/components/adminManage'
import userManage from '@/components/userManage'
import musicManage from '@/components/musicManage'
import commentsManage from '@/components/commentsManage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/register',
        name: 'register',
        component: register
    }, {
        path: '/musicplay',
        name: 'musicPlay',
        component: musicPlay
    }, {
        path: '/comments',
        name: 'comments',
        component: comments
    }, {
        path: '/adminlogin',
        name: 'adminLogin',
        component: adminLogin
    }, {
        path: '/adminmanage',
        name: 'adminManage',
        component: adminManage,
        children: [{
            path: '',
            component: userManage
        }, {
            path: 'user',
            component: userManage
        }, {
            path: 'music',
            component: musicManage
        }, {
            path: 'comments',
            component: commentsManage
        }]
    }]
})