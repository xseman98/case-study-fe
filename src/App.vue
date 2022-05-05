<template>
  <v-app>
    <navbar/>
    <v-main>
      <v-container fluid style="min-width: 500px !important">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  }
};
</script>
