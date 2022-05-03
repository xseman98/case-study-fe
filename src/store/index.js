import Vue from 'vue'
import Vuex from 'vuex'

import CurrenciesStore from '@/store/CurrenciesStore'
import LatestStore from '@/store/LatestStore'
import ConversionStore from '@/store/ConversionStore'
import HistoryStore from '@/store/HistoryStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CurrenciesStore,
    LatestStore,
    ConversionStore,
    HistoryStore
  }
})
