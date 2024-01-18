<script lang="ts">
    import "@scss/reset.scss";
</script>

<nav class="row">
    Test nav
    <a href="/">Home</a>
    <a href="/components">Components</a>
    <a href="/demo">Demo</a>
</nav>
<main class="col">
    <slot />
</main>
<footer>Footer</footer>

<style lang="scss">
    footer,
    nav {
        padding: 1rem;

        background-color: #333333;

        color: #efefef;

        gap: 1rem;

        & a {
            color: white;
        }
    }

    main {
        gap: 1rem;
        flex-grow: 1;
    }
</style>
