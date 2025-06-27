<script lang="ts">
  import { Board } from "$lib/game/board/Board";
  import Cell from "./Cell.svelte";

    const board = new Board()
</script>

<div class="fixed-grid has-6-cols">
    <div class="grid">
        {#each board.asArray() as cell}
            <Cell data={cell} />
        {/each}
     
    </div>
  </div>

  <style>
    body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: gray;
    }

    .grid {
        padding-top: 100px;
        margin: 0 auto;
        width: 800px;
        gap: 5px;
    }
    
  </style>