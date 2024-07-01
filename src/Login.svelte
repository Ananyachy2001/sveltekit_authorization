<script>
  import { auth } from "./stores/userStore";

  let username = "";
  let password = "";
  let role = "user";  // Default role
  let errorMessage = "";

  // Dummy credentials for demonstration
  const dummyCredentials = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    user: { username: "user", password: "user123", role: "user" }
  };

  function handleLogin() {
    // Check if entered credentials match any of the dummy credentials
    const credentials = Object.values(dummyCredentials).find(cred =>
      cred.username === username && cred.password === password && cred.role === role
    );

    if (credentials) {
      auth.login(username, role);
    } else {
      errorMessage = "Invalid username, password, or role";
    }
  }
</script>

<div class="login-container">
  <input type="text" bind:value={username} placeholder="Enter username" />
  <input type="password" bind:value={password} placeholder="Enter password" />
  <select bind:value={role}>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
  <button on:click={handleLogin}>Login</button>
  {#if errorMessage}
    <div class="error">{errorMessage}</div>
  {/if}
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f9;
  }
  input,
  button,
  select {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 80%;
    max-width: 300px;
  }
  button {
    background-color: #0056b3;
    color: white;
    cursor: pointer;
  }
  .error {
    color: red;
    margin-top: -8px;
    margin-bottom: 10px;
  }
</style>
