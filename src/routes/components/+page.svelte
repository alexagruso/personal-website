<script lang="ts">
    import TextInput from "@lib/components/ui-kit/TextInput.svelte";

    let value: string;
</script>

<div class="container row">
    <div class="card col">
        <TextInput name="test" bind:value />
    </div>
    <div class="card col">
        <TextInput name="test" bind:value />
    </div>
    <div class="card col">
        <TextInput name="test" bind:value />
        <TextInput name="test" bind:value />
        <TextInput name="test" bind:value />
        <TextInput name="test" bind:value />
    </div>
</div>

<style lang="scss">
    .container {
        gap: 2rem;

        margin: 2rem;
        box-shadow: 0 0 0.1rem black;
        padding: 2rem;
    }

    .card {
        flex-basis: 0;
        flex-grow: 1;
        gap: 1rem;

        box-shadow: 0 0 0.1rem black;
        padding: 1rem;
    }
</style>
