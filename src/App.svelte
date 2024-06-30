<script>
  import { Router, Route, Redirect } from 'svelte-routing';
  import { auth } from './stores/userStore';
  import Login from './Login.svelte';
  import Dashboard from './Dashboard.svelte';
  import NotFound from './NotFound.svelte';  // A component to show when no route matches

  auth.initialize();

  // Helper to determine if user is authenticated
  $: isAuthenticated = $auth ? true : false;
</script>

<Router>
  <Route path="/login" component={Login} />
  <Route path="/dashboard" let:location>
    {#if isAuthenticated}
      <Dashboard />
    {:else}
      <Redirect to="/login" />
    {/if}
  </Route>
  <Route path="*" component={NotFound} />
</Router>
