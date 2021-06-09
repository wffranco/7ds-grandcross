<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div v-for="item of 16" :key="item" class="d-flex flex-column">
      <router-link :to="`/personajes/${item}`">
        <img src="@/assets/img/character157.png" alt="1" class="m-1 link-hover char-size" />
      </router-link>
      <span class=" text-center text-white">Name</span>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.char-size {
  height: 95px;
  width: 95px;
}

.link-hover {
  transition: all .05s ease-in-out;
}

.link-hover:hover {
  transform: scale(1.1);
}


</style>
