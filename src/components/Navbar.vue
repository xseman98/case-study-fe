<template>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <p class="text-bold-nav">
          CASE STUDY
        </p>
        <v-btn
          class="text"
          text
          x-large
          rounded
          color="purple"
          @click="navigateTo('Home')"
        >
          CONVERT
        </v-btn>
        <v-btn
          class="text-nav"
          text
          x-large
          rounded
          color="purple"
          @click="navigateTo('Statistics')"
        >
          STATISTICS
        </v-btn>
      </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',

  data: () => ({}),

  methods: {
    navigateTo(where) {
      this.$router.push({ name: where });
    }
  }
};
</script>

<style scoped src="@/assets/css/style.css">
</style>
