<script>
  import Job from "../Job/index.svelte";
  import InfiniteLoading from "svelte-infinite-loading";

  import { getJobs } from "../../api/index";

  let page = 0;

  export let jobs = [];

  async function getData({ detail: { loaded, complete } }) {
    const data = await getJobs(page, "uk");
    console.log(data);

    if (data.length) {
      page += 1;

      jobs = [...jobs, ...data];

      loaded();
    } else {
      complete();
    }
  }
</script>

<style>
</style>

<ul class="job-list">
  {#if jobs.length > 0}
    {#each jobs as job}
      <Job {job} />
    {/each}
  {/if}

  <InfiniteLoading on:infinite={getData}>
    <p slot="noResults">No results found.</p>

    <p slot="noMore">No jobs left.</p>
  </InfiniteLoading>
</ul>
