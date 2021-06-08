<template>
  <div class="home">
    <index />
  </div>
</template>

<script lang="ts">
import Index from '@/components/Index.vue'; // @ is an alias to /src
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {Index},
});
</script>
