<script>
  import { onMount } from "svelte";

  import { getJobs } from "../../api/index";

  import Search from "../../components/Search/index.svelte";
  import Pagination from "../../components/Pagination/index.svelte";
  import Details from "../../components/Details/index.svelte";
  import JobList from "../../components/JobList/index.svelte";

  // default search values
  let title = "";
  let page = 1;
  let location = "Remote";
  let fullTime = false;
  let loading = true;

  // pagination
  let isFirstPage = true;
  let isLastPage = false;

  export let jobs = [];

  /**
    Handle search by title
   */
  function handleSearch({ detail }) {
    title = detail.value;
    page = 1;

    isFirstPage = true;
    isLastPage = false;

    getData();
  }

  /**
    Handle search location
   */
  function handleLocation({ detail }) {
    location = detail.value;
    page = 1;

    isFirstPage = true;
    isLastPage = false;

    getData();
  }

  /**
    Handle full-time search
   */
  function handleFullTime({ detail }) {
    fullTime = detail.fullTime;
    page = 1;

    isFirstPage = true;
    isLastPage = false;

    getData();
  }

  /**
    Handle default search location
   */
  function handleChoose({ detail }) {
    location = detail.country;
    page = 1;

    isFirstPage = true;
    isLastPage = false;

    getData();
  }

  function handleBackPage() {
    // if not first page
    if (page !== 1) {
      page = page - 1;

      isLastPage = false;

      getData();
    } else {
      // set first page
      isFirstPage = true;
      isLastPage = false;
    }
  }

  function handleNextPage() {
    // set next page
    page = page + 1;
    isFirstPage = false;

    getData();
  }

  /**
    Get the jobs with the parameters.
   */
  async function getData() {
    // setting spinner
    loading = true;

    // get data
    const data = await getJobs(page, location, title, fullTime);
    jobs = data;

    // if no data = last page
    if (data.length === 0) {
      isLastPage = true;
      isFirstPage = false;
    }

    // if first page on fetch
    if (page === 1) {
      isFirstPage = true;
      isLastPage = false;
    }

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

<Pagination
  on:back={handleBackPage}
  on:next={handleNextPage}
  {isFirstPage}
  {isLastPage} />
