<script>
  import { auth } from "./stores/userStore";
  import Login from "./Login.svelte";
  import Dashboard from "./Dashboard.svelte"; // Create this component

  auth.initialize();
</script>

{#if $auth}
  <Dashboard />
{:else}
  <Login />
{/if}
