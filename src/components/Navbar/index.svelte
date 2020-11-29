<script>
  import { onMount } from "svelte";
  let dark_mode = false;

  function getTheme() {
    const theme = localStorage.getItem("dark_mode");

    if (theme === "true") {
      document.body.classList.add("dark");
      dark_mode = true;
    } else {
      document.body.classList.remove("dark");
      dark_mode = false;
    }
  }

  function handleTheme() {
    if (dark_mode === false) {
      document.body.classList.add("dark");
      dark_mode = true;
      localStorage.setItem("dark_mode", "true");
    } else {
      document.body.classList.remove("dark");
      dark_mode = false;
      localStorage.setItem("dark_mode", "false");
    }

    getTheme();
  }

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
