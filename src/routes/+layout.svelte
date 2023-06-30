<script lang="ts">
    import {PUBLIC_PB_URL} from '$env/static/public';
    import '../styles/app.scss';
</script>


<div class="main">
    <slot/>
</div>

<footer>
    <a target="_blank" href="{PUBLIC_PB_URL}/_/">Admin</a>
</footer>
