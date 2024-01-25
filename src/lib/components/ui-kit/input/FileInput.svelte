<script lang="ts">
    export let label = "Label";
    export let name: string;
</script>

<label for="{name}-input">
    <input type="file" {name} id="{name}-input" />
</label>

<style lang="scss">
    input {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }

    input::-webkit-file-upload-button {
        border: 2px solid black;
        border-radius: 0.25rem;
        padding: 0.5rem 2rem;

        background-color: white;

        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }
</style>
