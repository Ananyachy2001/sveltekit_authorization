// routes.js
import Login from './Login.svelte';
import Dashboard from './Dashboard.svelte';
import NotFound from './NotFound.svelte'; // Create a 404 component if needed
import { auth } from './stores/userStore';

function requireAuth(component) {
  return {
    component,
    props: { auth }
  };
}

export default {
  '/': Login,
  '/login': Login,
  '/dashboard': requireAuth(Dashboard),
  '*': NotFound
};
