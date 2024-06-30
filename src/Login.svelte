<script>
  import { auth } from "./stores/userStore";

  let username = "";
  let password = "";
  let errorMessage = "";

  function handleLogin() {
    if (username && password === "password123") {
      // Dummy password check
      auth.login({ username });
    } else {
      errorMessage = "Invalid username or password";
    }
  }
</script>

<div class="login-container">
  <input type="text" bind:value={username} placeholder="Enter username" />
  <input type="password" bind:value={password} placeholder="Enter password" />
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
  button {
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
