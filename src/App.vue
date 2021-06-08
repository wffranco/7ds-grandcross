<template>
  <navbar class="mb-5" />
  <router-view class="container" />
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
