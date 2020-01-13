import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let lang = localStorage.getItem('lang');

export default new Vuex.Store({
    state: {
        lang: lang || 'pl',
    },
    mutations: {
        lang: (state, payload) => {
            state.lang = payload;
        },
    },
    actions: {
        setLang({commit}, data) {
            commit('lang', data);
            localStorage.setItem('lang', data);
        },
    },
    getters: {
        lang: state => {
            return state.lang;
        },
    },
    modules: {}
})
