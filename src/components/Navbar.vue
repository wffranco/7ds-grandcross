<template>
  <div class="navbg">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">7DS App</a>
        <button
          class="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="navbar-toggler-icon bi bi-menu-down" viewBox="0 0 16 16">
            <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item d-flex justify-content-center">
              <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item d-flex justify-content-center">
              <router-link to="/personajes" class="nav-link" aria-current="page">Personajes</router-link>
            </li>
            <li class="nav-item d-flex justify-content-center d-lg-none">
              <a v-if="!user" class="nav-link btn" aria-current="page" @click="login">
                <span>Iniciar Sesion</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a v-else class="nav-link btn" aria-current="page" @click="logout">
                <span>Cerrar Sesion</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="d-none d-lg-inline">
          <button v-if="!user" class="btn btn-outline-light" @click="login">
            <span>Iniciar Sesion</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </button>
          <button v-else class="btn btn-danger" @click="logout">
            <span>Cerrar Sesion</span>
          </button>
        </div>
      </div>
    </nav>
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
.navbg {
  background-color: #a86a67;
}

.navbar-brand {
  color: white;
}

.nav-link {
  color: white;
  opacity: 0.7;
}

.nav-link:focus {
  color: white;
  opacity: 0.7;
}

.nav-link:hover {
  color: white;
  opacity: 1;
}

.nav-item {
  border-radius: 10px;
}

.nav-item:hover {
  background-color: #b67571;
}

.navbar-toggler-icon {
  color: white;
}

.navbar-toggler:hover {
  background-color: #b67571;
}

</style>
