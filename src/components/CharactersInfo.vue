<template>
  <div class="row justify-content-between text-center">
    <div class="col">
      {{ character?._id }}
    </div>
    <div class="col">
      <img :src="character?.image" :alt="character?.name" class="m-1 link-hover char-size" />
    </div>
    <div class="col">
      {{ character?.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { getCharacter } from '@/store/characters';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const character = computed(() => getCharacter(props.id));
    return { character };
  },
});
</script>

<style lang="scss" scoped>

</style>
