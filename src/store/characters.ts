import { readonly, ref } from '@vue/reactivity';
import { Character } from '@/types';

const characters = ref<Character[]>([]);

// temporal data
characters.value = Array(20).fill({
  name: 'Liz',
  image: '/img/characters/character157.png',
}).map((character, id) => ({
  _id: `${id}`,
  ...character,
}));

export const refCharacters = () => characters;
export const useCharacters = () => readonly(characters);

export function addCharacter(character: Character) {
  characters.value.push(character);
}

export function getCharacter(_id: string) {
  return characters.value.find(character => character._id === _id);
}

export function removeCharacter(_id: string) {
  characters.value = characters.value.filter(character => character._id !== _id);
}
