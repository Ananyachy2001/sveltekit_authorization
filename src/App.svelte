<script>
  import { Router, Route, navigate } from 'svelte-routing';
  import { auth } from './stores/userStore';
  import Login from './Login.svelte';
  import Dashboard from './Dashboard.svelte';
  import NotFound from './NotFound.svelte';

  // Initialize authentication from local storage
  auth.initialize();

  import { get } from 'svelte/store';
  let isAuthenticated = false;

  // Subscribe to the authentication store and react to changes
  auth.subscribe(({ user }) => {
    isAuthenticated = !!user;  // Convert user presence to a boolean value

    // Always redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    } else {
      // If user is authenticated and on the login page, redirect to dashboard
      if (location.pathname === '/') {
        navigate('/dashboard', { replace: true });
      }
    }
  });

  // Redirect to login on initial load if not authenticated
  if (!isAuthenticated) {
    navigate('/', { replace: true });
  }
</script>

<Router>
  <Route path="/" component={Login} />
  <Route path="/dashboard">
    {#if isAuthenticated}
      <Dashboard />
    {:else}
      <Login />
    {/if}
  </Route>
  <Route path="*" component={NotFound} />
</Router>
