<script lang="ts">
    const { tileData } = $props()

    let clicked = $state(false);
</script>

<div class="cell {clicked ? "active" : ""}" on:click={() => clicked = !clicked}><img src={tileData.asset} /></div>

<style>
    img {
        height: 140px;
    }

    .cell:hover {
        transform: scale(1.25);
        opacity: 0.75;
        transition: opacity 0.15s ease-in-out;
        transition: transform 0.25s ease-in-out;
        transition: box-shadow 0.15s ease-out;
        transition: transform 0.25s ease-in-out;

        box-shadow: rgb(159, 159, 159) 5px 5px 25px;
    }
    
    .cell {
        overflow: hidden;
        transform: scale(0.9);
        opacity: 1;
        width: 140px;
        height: 140px;
        transition: opacity 0.15s ease-in-out;
        transition: transform 0.15s ease-in-out;
        transition: box-shadow 0.35s ease-in-out;
    }
    .active {
        transform: scale(1.25);
        transition: transform 0.25s ease-in-out;

        transition: box-shadow 1.25s ease-in-out;
        border: 2px solid rgb(174, 173, 173);
        box-shadow: rgb(159, 159, 159) 5px 5px 25px;
    }
</style>