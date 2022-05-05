<template>
  <v-container>
    <p class="header">Statistics</p>
    <v-row>
      <p class="text">The number of conversions:</p>
      <p class="text-bold">{{ getHistory.length }}</p>
    </v-row>
    <v-row>
      <p class="text">Commonly used target currency:</p>
      <p class="text-bold">{{ commonlyUsedCurrency('to') }}</p>
    </v-row>
    <v-row>
      <p class="text">Commonly used source currency:</p>
      <p class="text-bold">{{ commonlyUsedCurrency('from') }}</p>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <p class="text">Conversion history</p>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="getHistory"
      :items-per-page="10"
      class="elevation-8 table"
      :loading="!didLoadedHistory"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Statistics',

  data() {
    return {
      headers: [
        {
          text: 'From currency',
          value: 'from',
          align: 'start',
          class: "purple lighten-5",
        },
        {
          text: 'To currency',
          value: 'to',
          align: 'start',
          class: "purple lighten-5",
        },
        {
          text: 'Amount',
          value: 'amount',
          align: 'start',
          class: "purple lighten-5",
        },
        {
          text: 'Rate',
          value: 'rate',
          align: 'start',
          class: "purple lighten-5",
        },
        {
          text: 'Conversion',
          value: 'conversion',
          align: 'start',
          class: "purple lighten-5",
        },
      ]
    }
  },

  mounted() {
    this.fetchHistory()
  },

  computed: {
    ...mapGetters(['didLoadedHistory', 'getHistory'])
  },

  methods: {
    ...mapActions(['fetchHistory',]),

    commonlyUsedCurrency(target) {
      const targetCurrencies = []

      this.getHistory.forEach(item => {
        targetCurrencies.push(item[target])
      })
      
      return targetCurrencies.sort((a,b) =>
        targetCurrencies.filter(v => v===a).length - targetCurrencies.filter(v => v===b).length
      ).pop();
    }
  },
}
</script>

<style scoped src="@/assets/css/style.css">
</style>
