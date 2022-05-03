import {get} from '@/services'

const state = {
    didLoadedCurrencies: false,
    currencies: []
}

const getters = {
    didLoadedCurrencies: state => state.didLoadedCurrencies,

    getCurrencies: state => state.currencies,
}

const actions = {
    async fetchCurrencies({commit}) {
        commit('setDidLoadedCurrencies', false)
        const response = await get('currencies');
        commit('setCurrencies', response.data)
        commit('setDidLoadedCurrencies', true)
    }
}

const mutations = {
    setDidLoadedCurrencies: (state, value) => (state.didLoadedCurrencies = value),
    setCurrencies: (state, currencies) => (state.currencies = currencies)
}

export default {
    state,
    getters,
    actions,
    mutations,
}