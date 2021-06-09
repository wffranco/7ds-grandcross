<template>
  <navbar class="mb-5" />
  <router-view class="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  components: { Navbar },
});
</script>
