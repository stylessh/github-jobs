<script>
  import { onMount } from "svelte";

  import { getJobs } from "../../api/index";

  import Search from "../../components/Search/index.svelte";
  import Details from "../../components/Details/index.svelte";
  import JobList from "../../components/JobList/index.svelte";

  // default values
  let title = "";
  let page = "";
  let location = "London";
  let fullTime = false;
  let loading = true;

  export let jobs = [];

  function handleSearch({ detail }) {
    title = detail.value;
    page = 0;

    getData();
  }

  function handleLocation({ detail }) {
    console.log(detail.value);

    location = detail.value;
    page = 0;

    getData();
  }

  function handleFullTime({ detail }) {
    fullTime = detail.fullTime;

    getData();
  }

  function handleChoose({ detail }) {
    location = detail.country;

    getData();
  }

  async function getData() {
    // setting spinner
    loading = true;

    // get data
    const data = await getJobs(page, location, title, fullTime);
    jobs = data;

    // disabling spinner
    loading = false;
  }

  // get initial data
  onMount(() => {
    getData();
  });
</script>

<style>
  .grid-2 {
    display: grid;
    grid-template-columns: 30% 70%;
    width: 100%;

    margin-top: 2em;
  }

  @media screen and (max-width: 768px) {
    .grid-2 {
      grid-template-columns: 1fr;
    }
  }
</style>

<Search on:search={handleSearch} />

<div class="grid-2">
  <Details
    on:location={handleLocation}
    on:fulltime={handleFullTime}
    on:choose={handleChoose} />
  <JobList {jobs} {loading} />
</div>
