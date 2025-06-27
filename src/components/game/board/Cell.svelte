<script>
   let { data } = $props()
</script>

<div class="cell">{data.getBonus()}</div>

<style>
    
    .cell {
        transition: background 0.15s ease-out;
        height: 145px;
        background: rgb(217, 215, 215);
        font-size: 1.2em;
        text-align: center;
    }
    .cell:hover {
        background: rgb(230, 230, 230);
        transition: background 0.15s ease-out;

    }
</style>