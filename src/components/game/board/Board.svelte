<script lang="ts">
  import { Board } from "$lib/game/board/Board";
  import { Tile } from "$lib/game/deck/Tile";
  import Cell from "./Cell.svelte";

    const board = new Board()

    board.place(0, 0, new Tile({asset: "/tiles/Tile_5.png", rotation: 0}))
    board.place(5, 4, new Tile({asset: "/tiles/Tile_5.png", rotation: 90}))
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