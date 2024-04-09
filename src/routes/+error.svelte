<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="message col">
    <h1>Error: {$page.status}</h1>
    <h2>{$page.error?.message}</h2>
    <a href="/">Return Home</a>
</div>

<style lang="scss">
    .message {
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        background: linear-gradient(282deg, $primary 0%, $black 100%);
    }

    h1,
    h2 {
        color: $white;
    }

    a {
        text-decoration: underline;
        color: $white;

        &:hover {
            color: $accent;
        }
    }
</style>
