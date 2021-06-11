<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <button v-if="!user" class="btn btn-dark text-white" @click="login">Iniciar Sesion con Google</button>
    <template v-else>
      <h1>Bienvenido, {{ user.displayName }}</h1>
      <button class="btn btn-danger text-white" @click="logout">Cerrar Sesion</button>
    </template>
  </div>
</template>

<script>
import { login, logout } from '@/store/auth';
import { ref } from '@vue/reactivity';
export default {
  setup () {
    const user = ref(null);

    return { login, logout, user };
  },
};
</script>

<style lang="scss" scoped>

</style>
