<script>
  import Job from "../Job/index.svelte";

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
    {#if jobs.length > 0}
      {#each jobs as job}
        <Job {job} />
      {/each}
    {:else}
      <h4 class="not-found">No results found.</h4>
    {/if}

    <!-- if still loading data -->
  {:else}
    <p>loading...</p>
  {/if}
</ul>
