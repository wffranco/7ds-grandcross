<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div v-for="character of characters" :key="character._id" class="d-flex flex-column">
      <router-link :to="`/personajes/${character._id}`">
        <img :src="character.image" :alt="character.name" class="m-1 link-hover char-size" />
      </router-link>
      <span class=" text-center text-white">{{ character.name }}</span>
    </div>
  </div>
</template>

<script>import { useCharacters } from '@/store/characters';

export default {
  setup() {
    const characters = useCharacters();
    return { characters };
  },
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
