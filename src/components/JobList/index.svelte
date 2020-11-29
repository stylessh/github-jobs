<script>
  import Job from "../Job/index.svelte";
  import Spinner from "../Spinner/index.svelte";

  export let jobs;
  export let loading;
</script>

<style>
  .not-found {
    text-align: center;
    font-family: var(--main-font);

    color: var(--optional-color);
    font-weight: 500;
  }
</style>

<ul class="job-list">
  {#if !loading}
    <!-- if data is fetched -->
    {#if jobs.length > 0}
      {#each jobs as job}
        <Job {job} />
      {/each}
      <!-- if not found any job -->
    {:else}
      <h4 class="not-found">No results found.</h4>
    {/if}

    <!-- if is loading data -->
  {:else}
    <Spinner />
  {/if}
</ul>
