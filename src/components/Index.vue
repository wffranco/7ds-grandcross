<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <!-- <button v-if="!user" class="btn btn-dark text-white" @click="login">Iniciar Sesion con Google</button>
    <div v-else>
      <h1>Bienvenido, {{ user.displayName }}</h1>
      <button class="btn btn-danger text-white mt-2 mx-auto" @click="logout">Cerrar Sesion</button>
    </div> -->
  </div>
</template>

<script>
import { login, logout, useUser } from '@/store/auth';
export default {
  setup () {
    const user = useUser();

    return { login, logout, user };
  },
};
</script>

<style lang="scss" scoped>

</style>
