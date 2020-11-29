<script>
  import { getTimeInterval } from "../../utils/time";

  export let job;
</script>

<style>
  .job-info {
    font-family: var(--main-font);
    color: var(--secondary-color);
  }

  .job-info .top {
    margin-bottom: 2em;
  }

  .job-info .job-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    font-weight: 400;
    font-size: 1.2em;

    margin-bottom: 0.5em;
  }

  .job-info .job-title h2 {
    margin-right: 1em;
  }

  .job-info .job-title .type {
    display: inline-block;

    padding: 0.4em 0.5em;

    font-size: 0.8em;
    font-weight: 700;

    border: 1px solid var(--secondary-color);
    border-radius: 4px;
  }

  .job-info .company {
    display: flex;
    align-items: center;
  }

  .job-info .company img {
    display: inline-block;
    object-fit: contain;
    vertical-align: top;

    width: 42px;
    height: 42px;

    margin-right: 1em;

    border-radius: 4px;
  }

  .job-info .company .not-found {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 42px;
    height: 42px;

    margin-right: 1em;

    font-family: var(--secondary-font);
    font-weight: 500;
    font-size: 0.8em;

    color: var(--optional-color);
    background: var(--not-found-color);

    border-radius: 4px;
  }

  .job-info .created,
  .job-info .location {
    display: inline-flex;
    align-items: center;

    font-size: 0.8em;

    color: var(--optional-color);
  }

  .job-info .created .icon,
  .job-info .location .icon {
    font-size: 1.5em;

    margin-right: 0.3em;
  }

  .job-info .company .name {
    margin-bottom: 0.3em;
  }

  .job-info .text {
    font-family: var(--secondary-font);
  }

  :global(.job-info .text p) {
    margin: 1em 0;
  }

  :global(.job-info .text a) {
    margin: 1em 0;

    color: var(--main-color);
  }

  :global(.job-info .text ul) {
    list-style-position: inside;
  }
</style>

<article class="job-info">
  <div class="header">
    <div class="top">
      <div class="job-title">
        <h2>{job.title}</h2>

        <!-- setting badge if full time -->
        {#if job.type === 'Full Time'}
          <div class="type">{job.type}</div>
        {/if}
      </div>

      <div class="created">
        <ion-icon name="time-outline" class="icon" />
        <!-- formatting date to time ago -->
        <p>{getTimeInterval(new Date(job.created_at))}</p>
      </div>
    </div>

    <div class="bottom">
      <div class="company">
        {#if job.company_logo}
          <img src={job.company_logo} alt={job.company} />
        {:else}
          <div class="not-found">
            <p>not found</p>
          </div>
        {/if}

        <div class="info">
          <h5 class="name">{job.company}</h5>

          <div class="location">
            <ion-icon name="earth-outline" class="icon" />
            <p>{job.location}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text">
    {@html job.description}
  </div>
</article>
