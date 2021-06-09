import { readonly, ref } from '@vue/reactivity';
import { Character } from '@/types';

const characters = ref<Character[]>([]);

export const refCharacter = () => characters;
export const useCharacter = () => readonly(characters);

export function addCharacter(character: Character) {
  characters.value.push(character);
}

export function getCharacter(_id: string) {
  return characters.value.find(character => character._id === _id);
}

export function removeCharacter(_id: string) {
  characters.value = characters.value.filter(character => character._id !== _id);
}
