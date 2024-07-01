// userStore.js
import { writable } from 'svelte/store';
import { navigate } from 'svelte-routing';

function createAuthStore() {
  const { subscribe, set } = writable({ user: null, role: null });

  return {
    subscribe,
    login: (user, role) => {
      localStorage.setItem('user', JSON.stringify({ user, role }));
      set({ user, role });
      navigate('/dashboard');  // Redirect to dashboard after login
    },
    logout: () => {
      localStorage.removeItem('user');
      set({ user: null, role: null });
      navigate('/');  // Redirect to login after logout
    },
    initialize: () => {
      const data = localStorage.getItem('user');
      if (data) {
        const { user, role } = JSON.parse(data);
        set({ user, role });
      } else {
        navigate('/');  // Ensure unauthenticated users are redirected on app load
      }
    }
  };
}

export const auth = createAuthStore();
