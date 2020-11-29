<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // handle search
  function search() {
    dispatch("search", { value });

    value = "";
  }

  let value = "";
</script>

<style>
  .search {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 140px;

    background-image: url("/assets/bg.png");
    background-size: cover;

    border-radius: 8px;
  }

  .search .form {
    position: relative;
    display: grid;
    grid-template-columns: 1em 70% 1fr;
    align-items: center;

    width: 60%;

    border-radius: 4px;

    background: var(--aux-primary-color);

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .search .form .icon {
    position: relative;

    left: 1em;

    color: var(--optional-color);
  }

  .search .form input {
    flex-grow: 1;

    font-family: var(--secondary-font);
    font-weight: 400;

    color: var(--secondary-color);

    background: none;
    padding: 1.5em 2em;
  }

  .search .form input::placeholder {
    color: var(--optional-color);
  }

  .search .form button {
    display: inline-block;
    padding: 0.8em 2.5vw;
    margin: 0 0.4em;

    align-self: center;
    cursor: pointer;

    font-family: var(--secondary-font);

    font-weight: 500;
    font-size: 1em;

    background: var(--main-color);
    color: var(--aux-primary-color);

    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    .search .form {
      grid-template-columns: 1em 60% 1fr;
      width: 90%;
    }

    .search .form button {
      padding: auto 1vw;
    }
  }
</style>

<section class="search">
  <form class="form" on:submit={(e) => e.preventDefault()}>
    <ion-icon name="bag-outline" class="icon" />

    <input
      type="text"
      bind:value
      on:keyup={({ key }) => (key === 'Enter' && value.length > 0 ? search() : null)}
      placeholder="Title, companies, expertise of benefits" />

    <button on:click={search}> Search </button>
  </form>
</section>
