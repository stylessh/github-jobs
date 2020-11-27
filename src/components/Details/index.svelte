<script>
</script>

<style>
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
</style>

<section class="details">
  <article class="full-time">
    <label> <input type="checkbox" class="checkbox" /> Full time </label>
  </article>

  <article class="location">
    <h3>Location</h3>

    <div class="search">
      <ion-icon name="earth-outline" class="icon" />
      <input type="text" placeholder="City, state, zip code or country" />
    </div>
  </article>

  <article class="countries">
    <label> <input type="checkbox" class="checkbox" /> London </label>
    <label> <input type="checkbox" class="checkbox" /> Amsterdam </label>
    <label> <input type="checkbox" class="checkbox" /> New York </label>
    <label> <input type="checkbox" class="checkbox" /> Berlin </label>
  </article>
</section>
