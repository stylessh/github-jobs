<script>
  import Search from "../../components/Search/index.svelte";
  import Details from "../../components/Details/index.svelte";
  import JobList from "../../components/JobList/index.svelte";
</script>

<style>
  .grid-2 {
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100%;

    margin-top: 2em;
  }
</style>

<Search />

<div class="grid-2">
  <Details />
  <JobList />
</div>
