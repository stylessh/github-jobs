<script>
  import { createEventDispatcher } from "svelte";

  export let isFirstPage, isLastPage;

  const dispatch = createEventDispatcher();

  const back = () => {
    dispatch("back");
  };

  const next = () => {
    dispatch("next");
  };
</script>

<style>
  .pagination {
    display: flex;
    justify-content: flex-end;
  }

  .pagination div {
    margin: 0 1em;
  }

  .pagination .icon {
    font-size: 1.5em;
    cursor: pointer;
    color: var(--main-color);
  }
</style>

<div class="pagination">
  {#if !isFirstPage}
    <div class="back">
      <ion-icon name="arrow-back-outline" class="icon" on:click={back} />
    </div>
  {:else}
    <div />
  {/if}

  {#if !isLastPage}
    <div class="next">
      <ion-icon name="arrow-forward-outline" class="icon" on:click={next} />
    </div>
  {:else}
    <div />
  {/if}
</div>
