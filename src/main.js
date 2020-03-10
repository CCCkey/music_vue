// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.use(Vuex)
import header from './components/header'
import footer from './components/footer'

Vue.component("Header", header)
Vue.component("Footer", footer)

Vue.config.productionTip = false

axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios

// 状态管理数据存放
let state = {
        user: "",
        music_list: [
            { "id": 1, "music_name": "昨日青空", "singer": "尤长靖", "music_url": "../../static/song/尤长靖%20-%20昨日青空.mp3" },
            { "id": 2, "music_name": "山外小楼夜听雨", "singer": "任然", "music_url": "../../static/song/任然 - 山外小楼夜听雨.mp3" }
        ]
    }
    //状态管理修改方法
const mutations = {
        SETUSER(state, user) {
            state.user = user;
        },
        SETLUSICLIST(state, music_list) {
            state.music_list = music_list;
        }
    }
    //状态管理修改请求
const actions = {
    setStateUser(context, user) {
        context.commit("SETUSER", user);
    },
    setStateMusicList(context, music_list) {
        context.commit("SETLUSICLIST", music_list);
    }
};
//状态管理数据获取
const getters = {
        getState(state) {
            return state;
        }
    }
    // 注册到Vuex的Store里面
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})