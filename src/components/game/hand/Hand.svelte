<script lang="ts">
  import Tile from "./Tile.svelte";

    let { tiles } = $props()
</script>

    <div class="grid is-column-gap-0.5">
      {#each tiles as tile}
        <Tile tileData={tile} />
      {/each}
    </div>


<style>
.grid {
    margin: 25px 450px;
}
</style>