import { readonly, ref } from '@vue/reactivity';
import { auth, fb } from '@/firebase';
import { User } from '@/types';

const user = ref<User|null>(null);

export const refUser = () => user;
export const useUser = () => readonly(user);

export async function login() {
  try {
    const provider = new fb.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);
    user.value = response.user;
    console.log('user logged:', user.value);
  } catch (err) {
    console.error(err.message);
  }
}

export async function logout() {
  try {
    await auth.signOut();
    user.value = null;
    console.log('user logged out');
  } catch (err) {
    console.error(err.message);
  }
}
