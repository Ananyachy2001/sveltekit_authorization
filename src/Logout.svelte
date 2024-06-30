<script>
  import { auth } from "./stores/userStore";

  function handleLogout() {
    auth.logout();
  }
</script>

<button on:click={handleLogout}>Logout</button>
