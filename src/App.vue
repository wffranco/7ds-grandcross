<template>
  <app-navbar />
  <router-view />
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { AppNavbar },
};
</script>