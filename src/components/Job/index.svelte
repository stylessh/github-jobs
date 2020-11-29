<script>
  import { getTimeInterval } from "../../utils/time";
  import { Link } from "svelte-routing";

  export let job;
</script>

<style>
  .job {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    list-style-type: none;
    background: var(--aux-primary-color);

    margin-bottom: 2em;
    padding: 0.8em;

    border-radius: 4px;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

    transition: all 0.2s ease-in-out;

    cursor: pointer;
  }

  .job:hover {
    transform: translateY(-5px);
  }

  .job .left {
    display: flex;
  }

  .job .left img {
    display: inline-block;
    object-fit: contain;
    vertical-align: top;

    width: 90px;
    height: 90px;

    border-radius: 4px;
  }

  .job .left .not-found {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    width: 90px;
    height: 90px;

    font-family: var(--secondary-font);
    font-weight: 500;
    font-size: 0.8em;

    color: var(--optional-color);
    background: var(--not-found-color);

    border-radius: 4px;
  }

  .job .left .info {
    margin-left: 1em;
    color: var(--secondary-color);

    font-family: var(--secondary-font);
  }

  .job .left .info .company {
    font-weight: 700;
    font-size: 0.8em;

    margin-bottom: 0.5em;
  }

  .job .left .info .position {
    font-weight: 400;
    font-size: 1.2em;

    margin-bottom: 0.5em;
  }

  .job .left .info .type {
    display: inline-block;

    font-size: 0.8em;
    font-weight: 700;

    border: 1px solid var(--secondary-color);
    border-radius: 4px;

    padding: 0.4em 0.5em;
  }

  .job .right {
    font-family: var(--secondary-font);
    color: var(--optional-color);

    font-weight: 500;
  }

  .job .right div {
    display: inline-flex;
    align-items: center;

    margin-left: 2.5em;

    font-size: 0.8em;
  }

  .job .right .icon {
    font-size: 1.5em;
    margin-right: 0.3em;
  }

  @media screen and (max-width: 768px) {
    .job {
      flex-wrap: wrap;
    }

    .job .left .position {
      margin: 0.5em 0;
    }

    .job .right {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  }
</style>

<Link to="/job/{job.id}">
  <li class="job">
    <div class="left">
      {#if job.company_logo}
        <img src={job.company_logo} alt={job.company} />
      {:else}
        <div class="not-found">
          <p>not found</p>
        </div>
      {/if}

      <div class="info">
        <h5 class="company">{job.company}</h5>

        <h3 class="position">{job.title}</h3>

        {#if job.type === 'Full Time'}
          <div class="type">{job.type}</div>
        {/if}
      </div>
    </div>

    <div class="right">
      <div class="location">
        <ion-icon name="earth-outline" class="icon" />
        <p>{job.location}</p>
      </div>

      <div class="created">
        <ion-icon name="time-outline" class="icon" />
        <p>{getTimeInterval(new Date(job.created_at))}</p>
      </div>
    </div>
  </li>
</Link>
