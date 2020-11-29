<script>
  import { getJob } from "../../api/index";
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";

  import JobInfo from "../../components/JobInfo/index.svelte";
  import Spinner from "../../components/Spinner/index.svelte";

  export let id,
    job,
    loading = true;

  onMount(async () => {
    // setting spinner
    loading = true;

    // fetch data
    const data = await getJob(id);
    job = data;

    // disabling  spinner
    loading = false;
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

  @media screen and (max-width: 768px) {
    .job {
      grid-template-columns: 1fr;
    }
  }
</style>

{#if !loading}
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
            <!-- parsing to html all the info -->
            {@html job.how_to_apply}
          </div>
        </div>
      </article>

      <article class="right">
        <JobInfo {job} />
      </article>
    </section>
  {/if}

  <!-- put loading spinner -->
{:else}
  <Spinner />
{/if}
