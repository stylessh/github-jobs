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
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 60%;

    border-radius: 4px;

    background: var(--aux-primary-color);
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
    padding: 0.8em 2.5em;
    margin: 0 0.4em;

    cursor: pointer;

    font-family: var(--secondary-font);

    font-weight: 500;
    font-size: 1em;

    background: var(--main-color);
    color: var(--aux-primary-color);

    border-radius: 4px;
  }
</style>

<section class="search">
  <form class="form">
    <ion-icon name="bag-outline" class="icon"></ion-icon>
    <input type="text" placeholder="Title, companies, expertise of benefits" />

    <button> Search </button>
  </form>
</section>
