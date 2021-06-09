<template>
  <div>
    <characters-info :id="`${$route.params.id}`" />
  </div>
</template>

<script>
import CharactersInfo from '@/components/CharactersInfo.vue';

export default {
  components: { CharactersInfo },
};
</script>

<style lang="scss" scoped>

</style>
