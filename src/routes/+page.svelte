<script>
  import { Deck } from "$lib/game/deck/Deck";
  import Board from "../components/game/board/Board.svelte";
  import Hand from "../components/game/hand/Hand.svelte";

  const deck = new Deck()
  const tiles = deck.draw(5)
  
</script>

<Board />
<Hand tiles={tiles}/>


