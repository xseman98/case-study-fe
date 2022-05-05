<template>
  <v-container class="home" fluid>
     <card 
      class="card-margin"
      cardHeight="auto"
      cardWidth="max(40%, 300px)"
      cardColor="white"
      :isLoading="!didLoadedCurrencies">
      <template #heading>
        <p class="text">
          CONVERT
        </p>
        <p class="description">
          The conversion will take place automatically after all of the data will be entered.
        </p>
      </template>
      <template #body>
        <v-row class="card-margin">
          <v-col cols="12" lg="4" sm="12">
            <v-text-field
              v-model="convert.amount"
              hide-details
              single-line
              color="purple"
              label="Amount"
              type="number"
            />
          </v-col>
          <v-col cols="12" lg="4" sm="12">
            <v-autocomplete
              v-model="convert.from"
              :items="getCurrencies"
              item-text="code"
              item-value="code"
              label="From"
              color="purple"
              hide-no-data
              hide-selected
              auto-select-first
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="4" sm="12">
            <v-autocomplete
              v-model="convert.to"
              :items="getCurrencies"
              item-text="code"
              item-value="code"
              label="To"
              color="purple"
              hide-no-data
              hide-selected
              auto-select-first
              clearable
            ></v-autocomplete>
          </v-col>
        </v-row>
      </template>
      <template #footer>
        <v-row v-if="didLoadedConversion" class="card-margin">
          <p class="header">
            {{ getConversion.result[convert.to] }} {{ convert.to }}
          </p>
        </v-row>
      </template>
    </card>
    <card 
      class="card-margin"
      cardHeight="auto"
      cardWidth="max(40%, 300px)"
      cardColor="white"
      :isLoading="!didLoadedLatest">
      <template #heading>
        <p class="text">
          LATEST {{base ? `(${base})` : `(USD)`}}
        </p>
      </template>
      <template #body>
        <v-autocomplete
          v-model="base"
          :items="getCurrencies"
          item-text="code"
          item-value="code"
          label="Base"
          color="purple"
          hide-no-data
          hide-selected
          auto-select-first
          clearable
        ></v-autocomplete>
        <v-virtual-scroll
          :items="getLatest"
          height="500"
          item-height="120"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item.code">
              <v-list-item-content>
                <v-list-item-title>
                  <v-row>
                    <p class="text">
                      {{ item.code }}
                    </p>
                    <v-divider></v-divider>
                    <p class="text-bold">
                      {{ item.value }}
                    </p>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </template>
    </card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',

  components: {
    Card
  },

  data() {
    return {
      convert: {
        amount: null,
        from: null,
        to: null
      },
      base: null
    }
  },

  mounted() {
    this.fetchCurrencies()
    this.fetchLatest(this.base)
  },

  computed: {
    ...mapGetters(['didLoadedCurrencies', 'getCurrencies', 'didLoadedConversion', 'getConversion', 'getLatest', 'didLoadedLatest'])
  },

  methods: {
    ...mapActions(['fetchCurrencies', 'fetchConversion', 'fetchLatest'])
  },

  watch: {
    convert: {
      deep: true,
      handler() {
        if (this.convert.amount && this.convert.from && this.convert.to) {
            this.fetchConversion(this.convert)
        }
      }
    },
    base: {
      deep:true,
      handler() {
        this.fetchLatest(this.base)
      }
    }
  }
}
</script>

<style scoped src="@/assets/css/style.css">
</style>