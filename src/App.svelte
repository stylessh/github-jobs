<script>
  import { Router, Route } from "svelte-routing";

  import Navbar from "./components/Navbar/index.svelte";

  import Home from "./pages/Home/index.svelte";
  import Job from "./pages/Job/index.svelte";

  export let url = "";
</script>

<style>
  .container {
    width: 90%;
    max-width: 1400px;

    margin: 2em auto;
  }
</style>

<Router {url}>
  <div class="container">
    <Navbar />

    <Route path="/">
      <Home />
    </Route>

    <Route path="/job/:id">
      <Job />
    </Route>
  </div>
</Router>
