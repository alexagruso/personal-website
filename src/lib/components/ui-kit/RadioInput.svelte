<script lang="ts">
    export let label = "Label";
    export let name: string;
    export let group: boolean;
</script>

<label for="{name}-checkbox" class="row">
    <div class="checkbox-button row">
        <input type="radio" {name} id="{name}-checkbox" bind:group />
        <div class="check-animation" />
    </div>
    <span>{label}</span>
</label>

<style lang="scss">
    $hover-transition-duration: 150ms;

    label {
        position: relative;

        align-items: center;
        gap: 0.75rem;

        width: fit-content;
    }

    label > span {
        margin-top: 0.1rem; // TODO: do something less janky to center the text

        font-size: 0.8rem;
        font-weight: bold;
        line-height: 1cap;
        text-transform: uppercase;
    }

    input {
        appearance: none;

        border: 2px solid black;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
    }

    input:checked ~ .check-animation {
        scale: 1;
    }

    .checkbox-button {
        position: relative;

        align-items: center;

        overflow: hidden;

        height: 100%;
    }

    .check-animation {
        position: absolute;

        transition: scale 150ms;

        border-radius: 50%;
        height: 100%;
        aspect-ratio: 1 / 1;
        scale: 0;

        background-color: black;
    }
</style>
