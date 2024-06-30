<script>
  import Logout from "./Logout.svelte";
</script>

<div class="dashboard">
  <h1>Medical Imaging Dashboard</h1>

  <div class="section">
    <h2>X-ray Images</h2>
    <ul>
      <li>View recent X-rays</li>
      <li>Upload new X-ray images</li>
      <li>Analyze X-ray data</li>
    </ul>
  </div>

  <div class="section">
    <h2>MRI Scans</h2>
    <ul>
      <li>Access MRI scan archive</li>
      <li>Compare MRI results</li>
      <li>MRI scan scheduling</li>
    </ul>
  </div>

  <div class="section">
    <h2>CT Scans</h2>
    <ul>
      <li>Examine CT scan details</li>
      <li>Report generation for CT scans</li>
      <li>CT scan diagnostic tools</li>
    </ul>
  </div>

  <Logout />
</div>

<style>
  .dashboard {
    padding: 20px;
    background-color: #eef1f5;
    height: 100vh;
  }
  h1 {
    color: #333;
    text-align: center;
  }
  .section {
    background-color: #fff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  h2 {
    color: #0056b3;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
