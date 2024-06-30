// In userStore.js
import { writable } from 'svelte/store';
import { navigate } from 'svelte-routing';

function createAuthStore() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    login: user => {
      localStorage.setItem('user', JSON.stringify(user));
      set(user);
      navigate('/dashboard');  // Redirect to dashboard after login
    },
    logout: () => {
      localStorage.removeItem('user');
      set(null);
      navigate('/login');  // Redirect to login after logout
    },
    initialize: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        set(user);
      } else {
        navigate('/login');  // Ensure unauthenticated users are redirected on app load
      }
    }
  };
}

export const auth = createAuthStore();
