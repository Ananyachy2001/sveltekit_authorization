import { writable } from 'svelte/store';

function createAuthStore() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        login: user => {
            localStorage.setItem('user', JSON.stringify(user));
            set(user);
        },
        logout: () => {
            localStorage.removeItem('user');
            set(null);
        },
        initialize: () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                set(user);
            }
        }
    };
}

export const auth = createAuthStore();
