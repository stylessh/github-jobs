<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // handle location input
  function location() {
    dispatch("location", { value, newData: true });

    value = "";
  }

  // handle full time checkbox
  function fullType() {
    dispatch("fulltime", { fullTime });
  }

  // handle default locations
  function chooseLocation(e) {
    const country = e.target.dataset.name;

    dispatch("choose", { country });
  }

  let defaultCountries = ["London", "Amsterdam", "New York", "Berlin"];

  let value = "";
  let fullTime = false;
  let choosed = "London";
</script>

<style>
  .details {
    padding-right: 2em;
  }
  .details .checkbox {
    margin-right: 0.5em;
    vertical-align: text-bottom;
  }
  .details label {
    display: flex;
    align-items: center;
    font-family: var(--main-font);
    font-weight: 500;
    font-size: 0.9em;

    color: var(--secondary-color);

    cursor: pointer;
  }
  .details .full-time {
    margin-bottom: 1em;
  }

  .details .location h3 {
    color: var(--optional-color);

    font-family: var(--main-font);
    font-weight: 700;
    font-size: 0.9em;
    text-transform: uppercase;
  }

  .details .location .search {
    display: flex;
    align-items: center;

    margin: 0.5em 0;

    background: var(--aux-primary-color);
    color: var(--optional-color);

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }

  .details .location .icon {
    padding: 0 0.5em;
  }

  .details .location input {
    flex-grow: 1;
    background: none;
    padding: 1em 0;

    border: none;

    font-family: var(--secondary-font);
    font-weight: 400;

    color: var(--secondary-color);
  }

  .details .location input::placeholder {
    color: var(--optional-color);
  }

  .details .countries {
    margin: 1em 0;
  }

  .details .countries label {
    margin: 1em 0;
  }


  @media screen and (max-width: 768px) {
    .details {
      padding: 0;
    }
  }
</style>

<section class="details">
  <article class="full-time">
    <label>
      <input
        type="checkbox"
        class="checkbox"
        bind:checked={fullTime}
        on:change={fullType} />
      Full time
    </label>
  </article>

  <article class="location">
    <h3>Location</h3>

    <div class="search">
      <ion-icon name="earth-outline" class="icon" />
      <input
        type="text"
        placeholder="City, state, zip code or country"
        bind:value
        on:keyup={({ key }) => (key === 'Enter' && value.length > 0 ? location() : null)} />
    </div>
  </article>

  <article class="countries">
    {#each defaultCountries as country}
      <label>
        <input
          type="radio"
          class="checkbox"
          data-name={country}
          value={country}
          bind:group={choosed}
          on:change={chooseLocation} />
        {country}
      </label>
    {/each}
  </article>
</section>
