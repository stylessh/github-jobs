<script>
  import { getJob } from "../../api/index";
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import JobInfo from "../../components/JobInfo/index.svelte";

  export let id, job;

  onMount(async () => {
    const data = await getJob(id);

    job = data;
  });
</script>

<style>
  .job {
    display: grid;
    grid-template-columns: 25% 1fr;

    column-gap: 2em;
  }

  .job .left .to-back {
    position: relative;

    color: var(--main-color);
    font-size: 0.8em;
    font-family: var(--main-font);
    font-weight: 500;
  }

  .job .left .to-back .icon {
    position: relative;
    top: 0.15em;
  }

  .job .left .how-to-apply {
    margin: 2em 0;
  }

  .job .left .how-to-apply h4 {
    color: var(--optional-color);
    text-transform: uppercase;

    font-size: 0.9em;
    font-weight: 700;
    font-family: var(--main-font);
  }

  .job .left .how-to-apply .info {
    width: 100%;
    margin: 1em 0;
    padding-right: 2em;
    color: var(--secondary-color);

    font-size: 0.9em;
    font-weight: 500;
    font-family: var(--main-font);
  }

  :global(.job .left .how-to-apply .info a) {
    color: var(--main-color);
  }

  .job .left .how-to-apply .info * {
    width: 100%;
  }
</style>

{#if job}
  <section class="job">
    <article class="left">
      <div class="to-back">
        <Link to="/">
          <ion-icon name="chevron-back-outline" class="icon" />
          Back to search
        </Link>
      </div>

      <div class="how-to-apply">
        <h4>How to apply</h4>

        <div class="info">
          {@html job.how_to_apply}
        </div>
      </div>
    </article>

    <article class="right">
      <JobInfo {job} />
    </article>
  </section>
{/if}
