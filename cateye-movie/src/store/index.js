import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        moviesList: '',
        conditions: { Selling: '在售', type: [], area: '', date: '', sort: '评分', pageNum: 1, },
        pageAll: 0,
        movieInfo: '',
        moviesList2: '',
        headerState: '首页'
    },
    mutations: {
        changemovieInfo(state, data) {
            state.movieInfo = data
        },
        changeHeaderState(state, header) {
            state.headerState = header
        }
    },
    actions: {
        changemovieInfo(ctx, data) {
            ctx.commit('changemovieInfo', data)
        },
        changeHeaderState(ctx, header) {
            ctx.commit('changeHeaderState', header)
        }
    }
})

export default store