import {get} from '@/services'

const state = {
    didLoadedConversion: false,
    conversion: {}
}

const getters = {
    didLoadedConversion: state => state.didLoadedConversion,

    getConversion: state => state.conversion,
}

const actions = {
    async fetchConversion({commit}, payload) {
        commit('setLoadedConversion', false)
        const response = await get(`convert?amount=${payload.amount}&toCurrency=${payload.to}&fromCurrency=${payload.from}`);
        commit('setConversion', response.data)
        commit('setLoadedConversion', true)
    }
}

const mutations = {
    setLoadedConversion: (state, value) => (state.didLoadedConversion = value),
    setConversion: (state, conversion) => (state.conversion = conversion)
}

export default {
    state,
    getters,
    actions,
    mutations,
}