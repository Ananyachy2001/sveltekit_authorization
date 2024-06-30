<script context="module">
  export async function load({ session }) {
    if (!session.user) {
      return {
        status: 302,
        redirect: "/login",
      };
    }
    return {};
  }
</script>

<script>
  // Component logic
</script>
