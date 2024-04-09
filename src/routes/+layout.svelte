<script lang="ts">
    import "@lib/scss/reset.scss";
    import Footer from "@lib/components/layout/Footer.svelte";
    import Navbar from "@lib/components/layout/navbar/Navbar.svelte";
</script>

<main class="col">
    <Navbar />
    <slot />
    <Footer />
</main>

<style lang="scss">
    main {
        justify-content: space-between;

        min-height: 100vh;
    }
</style>
