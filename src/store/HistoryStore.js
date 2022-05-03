import {get} from '@/services'

const state = {
    didLoadedHistory: false,
    history: []
}

const getters = {
    didLoadedHistory: state => state.didLoadedHistory,

    getHistory: state => state.history,
}

const actions = {
    async fetchHistory({commit}) {
        commit('setDidLoadedHistory', false)
        const response = await get('statistics/history');
        commit('setHistory', response.data)
        commit('setDidLoadedHistory', true)
    }
}

const mutations = {
    setDidLoadedHistory: (state, value) => (state.didLoadedHistory = value),
    setHistory: (state, history) => (state.history = history)
}

export default {
    state,
    getters,
    actions,
    mutations,
}