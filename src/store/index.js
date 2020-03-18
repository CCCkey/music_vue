import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态管理数据存放
let state = {
        admin_info: null,
        music_list: [],
        admin_info: null,
        admin_token: null
    }
    //状态管理数据获取
const getters = {
        getState(state) {
            return state;
        }
    }
    //状态管理修改方法
const mutations = {
        SETMUSICLIST(state, music_list) {
            state.music_list = music_list;
        },
        SETMUSICINFO(state, music_info) {
            state.music_info = music_info;
        },
        SETADMIN(state, admin_info) {
            state.admin_info = admin_info;
        },
        SETADMINTOKEN(state, admin_token) {
            state.admin_token = admin_token;
        }
    }
    //状态管理修改请求
const actions = {
    setStateMusicList(context, music_list) {
        context.commit("SETMUSICLIST", music_list);
    },
    setStateMusicInfo(context, music_info) {
        context.commit("SETMUSICINFO", music_info);
    },
    setStateAdmin(context, admin_info) {
        context.commit("SETADMIN", admin_info);
    },
    setStateAdminToken(context, admin_token) {
        context.commit("SETADMINTOKEN", admin_token);
    }
};

// 注册到Vuex的Store里面
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
export default store