<script lang="ts">
    export let label = "Label";
    export let name: string;
    export let checked: boolean;
</script>

<label for="{name}-checkbox" class="row">
    <input type="checkbox" {name} id="{name}-checkbox" bind:checked />
    <div class="checkmark" />
    <span>{label}</span>
</label>

<style lang="scss">
    $hover-transition-duration: 150ms;

    label {
        position: relative;

        gap: 1rem;

        width: fit-content;
    }

    label > span {
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    input {
        appearance: none;
        width: 1rem;
        height: 1rem;
        border: 1px solid black;
    }

    input:checked {
        background-color: black;

        & ~ .checkmark {
            background-color: red;
        }
    }

    .checkmark {
        position: absolute;
        top: calc(50% - (0.5rem / 2));
        left: calc(50% - (0.5rem / 2));

        // display: none;

        width: 0.5rem;
        height: 0.5rem;

        background-color: green;
    }
</style>
