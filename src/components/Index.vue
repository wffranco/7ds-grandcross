<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <div v-if="!user">
      <h1>HOME</h1>
    </div>
    <div v-else>
      <h1>Bienvenido, {{ user.displayName }}</h1>
    </div>
  </div>
</template>

<script>
import { useUser } from '@/store/auth';
export default {
  setup () {
    const user = useUser();

    return { user };
  },
};
</script>

<style lang="scss" scoped>

</style>
