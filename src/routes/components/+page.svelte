<script lang="ts">
    import CheckboxInput from "@lib/components/ui-kit/input/CheckboxInput.svelte";
    import FileInput from "@lib/components/ui-kit/input/FileInput.svelte";
    import RadioInput from "@lib/components/ui-kit/input/RadioInput.svelte";
    import TextAreaInput from "@lib/components/ui-kit/input/TextAreaInput.svelte";
    import TextInput from "@lib/components/ui-kit/input/TextInput.svelte";

    let checkbox: boolean;
    let text: string;
    let textarea: string;
</script>

<div class="card col">
    <TextInput name="text" label="text" placeholder="text placeholder" bind:value={text} />
    <TextAreaInput name="textarea" label="textarea" placeholder="textarea placeholder" bind:value={textarea} />
    <CheckboxInput name="checkbox" label="checkbox" bind:checked={checkbox} />
    <RadioInput name="radio" id="one-radio" label="one" />
    <RadioInput name="radio" id="two-radio" label="two" />
    <RadioInput name="radio" id="three-radio" label="three" />
    <RadioInput name="radio" id="four-radio" label="four" />
    <hr />
    <FileInput name="file" label="file" />
</div>

<style lang="scss">
    .card {
        flex-basis: 0;
        flex-grow: 1;
        gap: 1rem;

        margin: 2rem;
        box-shadow: 0 0 0.1rem black;
        padding: 1rem;
        max-width: 48rem;
        width: 100%;
    }

    .card:nth-of-type(2n) {
        flex-grow: 2;
    }
</style>
