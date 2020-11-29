<script>
  import { onMount } from "svelte";

  // initial theme
  let dark_mode = false;

  function setDark() {
    document.body.classList.add("dark");
    dark_mode = true;
  }

  function setLight() {
    document.body.classList.remove("dark");
    dark_mode = false;
  }

  function getTheme() {
    // getting saved theme
    const theme = localStorage.getItem("dark_mode");

    if (theme === "true") {
      // if dark mode
      setDark();
    } else {
      // if light mode
      setLight();
    }
  }

  function handleTheme() {
    if (dark_mode === false) {
      // changing to dark
      setDark();
      localStorage.setItem("dark_mode", "true");
    } else {
      // changing to light
      setLight();
      localStorage.setItem("dark_mode", "false");
    }

    // get theme again
    getTheme();
  }

  // on page load get theme
  onMount(() => {
    getTheme();
  });
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2em;
  }

  .header .logo {
    font-family: var(--main-font);
    color: var(--github-color);
    font-weight: 700;
    font-size: 1.5em;
  }

  .header .logo span {
    font-weight: 300;
  }

  .header .theme {
    font-size: 1.5em;
    cursor: pointer;
  }

  .header .theme div .icon {
    color: var(--github-color);
  }
</style>

<header class="header">
  <div class="logo">GitHub <span>Jobs</span></div>

  <div class="theme" on:click={handleTheme}>
    {#if dark_mode === false}
      <div class="light">
        <ion-icon name="sunny-outline" class="icon" />
      </div>
    {:else}
      <div class="dark">
        <ion-icon name="moon-outline" class="icon" />
      </div>
    {/if}
  </div>
</header>
