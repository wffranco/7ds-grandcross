import { readonly, ref } from '@vue/reactivity';
import { Character } from '@/types';
import { images } from './tmp';
import { db } from '@/firebase';

const characters = ref<Character[]>([]);

// temporal data
characters.value = Array(20).fill({
  name: 'Liz',
  // image: '/img/characters/character157.png',
  image: images.thumbnail,
}).map((character, id) => ({
  _id: `${id}`,
  ...character,
}));

export const refCharacters = () => characters;
export const useCharacters = () => readonly(characters);

// export function addCharacter(character: Character) {
//   characters.value.push(character);
// }

export function getCharacter(_id: string) {
  return characters.value.find(character => character._id === _id);
}

// export function removeCharacter(_id: string) {
//   characters.value = characters.value.filter(character => character._id !== _id);
// }

db.collection('character').add({
  name: 'liz',
  img: null,
})
  .then((docRef: { id: any; }) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error: any) => {
    console.error('Error adding document: ', error);
  });
