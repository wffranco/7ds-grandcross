<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div v-for="item of 16" :key="item.id" class="">
      <router-link :to="'#'" class="link-hover d-flex flex-column text-decoration-none char-border">
        <img src="@/assets/img/character157.png" alt="1" class="m-1 char-size" />
        <span class=" text-center text-white">Name</span>
      </router-link>
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

.link-hover:hover {
  background-color: #2d7fcc;
}

.char-border {
  border-radius: 3px;
}

</style>
