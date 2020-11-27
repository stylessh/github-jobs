<script>
  import { getTimeInterval } from "../../utils/time";

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
  }

  .job .right {
    display: flex;
  }

  .job .right img {
    display: inline-block;
    object-fit: contain;
    width: 90px;
    height: 90px;

    border-radius: 4px;
  }

  .job .right .info {
    margin-left: 1em;
    color: var(--secondary-color);

    font-family: var(--secondary-font);
  }

  .job .right .info .company {
    font-weight: 700;
    font-size: 0.8em;

    margin-bottom: 0.5em;
  }

  .job .right .info .position {
    font-weight: 400;
    font-size: 1.2em;

    margin-bottom: 0.5em;
  }

  .job .right .info .type {
    display: inline-block;

    font-size: 0.8em;
    font-weight: 700;

    border: 1px solid var(--secondary-color);
    border-radius: 4px;

    padding: 0.4em 0.5em;
  }

  .job .left {
    font-family: var(--secondary-font);
    color: var(--optional-color);

    font-weight: 500;
  }

  .job .left div {
    display: inline-flex;
    align-items: center;

    margin-left: 2.5em;

    font-size: 0.8em;
  }

  .job .left .icon {
    font-size: 1.5em;
    margin-right: .3em;
  }
</style>

<li class="job">
  <div class="right">
    <img src={job.company_logo} alt={job.company} />

    <div class="info">
      <h5 class="company">{job.company}</h5>

      <h3 class="position">{job.title}</h3>

      {#if job.type === 'Full Time'}
        <div class="type">{job.type}</div>
      {/if}
    </div>
  </div>

  <div class="left">
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
