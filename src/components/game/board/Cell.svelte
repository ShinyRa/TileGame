<script>
   let { data } = $props()
</script>

<div class="cell">
    {#if data.tile?.asset}
        <img src={data.tile?.asset} alt="test" style="transform: rotate({data.tile?.rotation}deg);"/>
    {:else}
        {data.getBonus()}
    {/if}
</div>

<style>
    
    .cell {
        transition: background 0.15s ease-out;
        height: 130px;
        background: rgb(217, 215, 215);
        font-size: 1.2em;
        text-align: center;
        box-shadow: inset rgb(190, 189, 189) 3px 5px 8px;
    }
    .cell:hover {
        cursor: default;
        background: rgb(230, 230, 230);
        transition: background 0.15s ease-out;

    }
</style>