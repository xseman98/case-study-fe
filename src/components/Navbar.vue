<template>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <p class="text-bold">
          CASE STUDY
        </p>
        <v-btn
          text
          x-large
          rounded
          color="purple"
          @click="navigateTo('Home')"
        >
          CONVERT
        </v-btn>
        <v-btn
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

<style scoped>
.text-bold {
  text-align: left;
  font-size: 36px;
  font-weight: 600;
  color: purple;
  margin: 1.5rem;
}
</style>
