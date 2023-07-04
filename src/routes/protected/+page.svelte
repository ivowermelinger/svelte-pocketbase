<script lang="ts">
    export let data;
</script>
<div class="container">
    <div class="row">
        <div class="gr-24">
            <h1>Protected Route</h1>
            <a href="/protected/child">Protected Child Route</a>
        </div>
        <div class="gr-24">
            <ul>
                {#each data.records ?? [] as record}
                    <li>{record.title}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
