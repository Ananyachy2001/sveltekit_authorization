// stores/userStore.js
import { writable } from 'svelte/store';

export const auth = writable(null);

export function initialize() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    auth.set(JSON.parse(storedUser));
  }
}

export function login(user) {
  auth.set(user);
  localStorage.setItem('user', JSON.stringify(user));
}

export function logout() {
  auth.set(null);
  localStorage.removeItem('user');
}
