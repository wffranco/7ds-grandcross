<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div v-for="item of 16" :key="item.id">
      <img src="@/assets/img/character157.png" alt="1" class="m-1 char-size" />
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
</style>
