<script lang="ts">
  import { Deck } from "$lib/game/deck/Deck";
  import { onMount } from "svelte";
  import Board from "../components/game/board/Board.svelte";
  import Hand from "../components/game/hand/Hand.svelte";
  import type { Tile } from "$lib/game/deck/Tile";

  const deck = $state(new Deck())
  let tiles: Tile[] = $state([]);

  onMount(() => {
    tiles = deck.draw(5);
  });


</script>


<Board />
<Hand tiles={tiles}/>


