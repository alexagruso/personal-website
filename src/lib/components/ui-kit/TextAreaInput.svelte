<script lang="ts">
    export let label = "Label";
    export let name: string;
    export let placeholder = "Placeholder";
    export let value: string;
</script>

<label for="{name}-textarea" class="col">
    <span>{label}</span>
    <!-- <input type="text" {name} id="{name}-input" {placeholder} bind:value /> -->
    <textarea {name} id="{name}-textarea" {placeholder} bind:value />
</label>

<style lang="scss">
    $hover-transition-duration: 150ms;

    label {
        gap: 1rem;
        flex-grow: 1;
    }

    label > span {
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    textarea {
        resize: vertical;

        transition: border-color $hover-transition-duration;

        border-bottom: 2px solid lighten(grey, 10%);
        padding-bottom: 0.25rem;
        height: 100%;

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

    textarea::placeholder {
        transition: color $hover-transition-duration;

        font-size: 1rem;
        color: lighten(grey, 10%);
    }
</style>
