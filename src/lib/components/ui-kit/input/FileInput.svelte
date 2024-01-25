<script lang="ts">
    export let label = "Label";
    export let name: string;
</script>

<label for="{name}-input">
    <input type="file" {name} id="{name}-input" />
</label>

<style lang="scss">
    $hover-transition-duration: 150ms;

    input {
        width: 100%;

        overflow: visible;

        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: darken(grey, 15%);
    }

    input::-webkit-file-upload-button {
        transition: background-color $hover-transition-duration, transform $hover-transition-duration;

        margin-right: 2rem;
        border: 2px solid black;
        border-radius: 0.25rem;
        padding: 0.5rem 2rem;

        background-color: white;

        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;

        &:hover,
        &:focus {
            background-color: darken(white, 15%);
        }
    }
</style>
