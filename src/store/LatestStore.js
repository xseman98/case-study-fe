import {get} from '@/services'

const state = {
    didLoadedLatest: false,
    latest: []
}

const getters = {
    didLoadedLatest: state => state.didLoadedLatest,

    getLatest: state => state.latest,
}

const actions = {
    async fetchLatest({commit}, base) {
        const uri = base ? `latest?base=${base}` : 'latest'
        commit('setDidLoadedLatest', false)
        const response = await get(uri)
        commit('setLatest', response.data)
        commit('setDidLoadedLatest', true)
    }
}

const mutations = {
    setDidLoadedLatest: (state, value) => (state.didLoadedLatest = value),
    setLatest: (state, latest) => (state.latest = latest)
}

export default {
    state,
    getters,
    actions,
    mutations,
}