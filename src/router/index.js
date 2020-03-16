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
        path: '/musicPlay/:id',
        name: 'musicPlay',
        component: musicPlay
    }, {
        path: '/comments',
        name: 'comments',
        meta: {
            requireAuth: true
        },
        component: comments,
    }, {
        path: '/adminlogin',
        name: 'adminLogin',
        component: adminLogin
    }, {
        path: '/adminmanage',
        name: 'adminManage',
        meta: {
            requireAuth: true
        },
        component: adminManage,
        children: [{
            path: '',
            meta: {
                requireAuth: true
            },
            component: userManage
        }, {
            path: 'user',
            meta: {
                requireAuth: true
            },
            component: userManage
        }, {
            path: 'music',
            meta: {
                requireAuth: true
            },
            component: musicManage
        }, {
            path: 'comments',
            meta: {
                requireAuth: true
            },
            component: commentsManage
        }]
    }]
})