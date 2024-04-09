<script lang="ts">
</script>

<nav class="row">
    <div class="links row">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
    </div>
    <div class="links row">
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

<style lang="scss">
    nav {
        justify-content: space-between;

        display: relative;
        position: absolute;
        width: 100%;

        padding: 1.5rem 20rem;
    }

    a {
        padding: 0.1rem 1rem;
        border-radius: 0.75rem;

        font-size: 2rem;
        color: $white;

        transition: color 200ms, background-color 200ms, transform 100ms;

        &:hover {
            color: $accent;
            background-color: mix($white, rgba(0, 0, 0, 0), 5%);
        }

        &:active {
            transform: translateY(0.25rem);
        }
    }

    .links {
        gap: 4rem;
    }
</style>
