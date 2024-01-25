<script lang="ts">
    export let label = "Label";
    export let name: string;
    export let placeholder = "Placeholder";
    export let value: string;
</script>

<label for="{name}-text" class="col">
    <span>{label}</span>
    <input type="text" {name} id="{name}-text" {placeholder} bind:value />
</label>

<style lang="scss">
    $hover-transition-duration: 150ms;

    label {
        gap: 1rem;
    }

    label > span {
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    input {
        transition: border-color $hover-transition-duration;

        border-bottom: 2px solid lighten(grey, 10%);
        padding-bottom: 0.25rem;

        font-size: 1rem;
        font-weight: 100;

        &:hover,
        &:focus {
            border-color: black;

            &::placeholder {
                color: black;
            }
        }
    }

    input::placeholder {
        transition: color $hover-transition-duration;

        font-size: 1rem;
        color: lighten(grey, 10%);
    }
</style>
