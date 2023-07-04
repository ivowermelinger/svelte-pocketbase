<script lang="ts">
    import '../styles/app.scss';
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>

<div class="main">
    <slot/>
</div>

<Footer/>
