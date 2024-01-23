<script lang="ts">
    import CheckboxInput from "@lib/components/ui-kit/CheckboxInput.svelte";
    import RadioInput from "@lib/components/ui-kit/RadioInput.svelte";
    import TextAreaInput from "@lib/components/ui-kit/TextAreaInput.svelte";
    import TextInput from "@lib/components/ui-kit/TextInput.svelte";

    let text: string;
    let textarea: string;
    let checkbox: boolean;
    let radio: boolean;
</script>

<div class="container row">
    <div class="card col">
        <TextInput name="text" label="text" placeholder="text placeholder" bind:value={text} />
        <TextAreaInput name="textarea" label="textarea" placeholder="textarea placeholder" bind:value={textarea} />
        <CheckboxInput name="checkbox" label="checkbox" bind:checked={checkbox} />
        <RadioInput name="radio" label="one" bind:group={radio} />
        <RadioInput name="radio" label="two" bind:group={radio} />
        <RadioInput name="radio" label="three" bind:group={radio} />
        <RadioInput name="radio" label="four" bind:group={radio} />
    </div>
</div>

<style lang="scss">
    .container {
        gap: 2rem;

        margin: 2rem;
        box-shadow: 0 0 0.1rem black;
        padding: 2rem;
        max-width: 48rem;
        width: 100%;
        min-height: 20rem;

        flex-wrap: wrap;
    }

    .card {
        flex-basis: 0;
        flex-grow: 1;
        gap: 1rem;

        box-shadow: 0 0 0.1rem black;
        padding: 1rem;
    }

    .card:nth-of-type(2n) {
        flex-grow: 2;
    }
</style>
