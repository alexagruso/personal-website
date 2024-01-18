import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            "@scss/*": "src/lib/scss/*",
            "@lib/*": "src/lib/*",
        },
    },
    // suppresses css warnings about unused selectors, can't find jsdoc typing for this.
    onwarn: (warning, handler) => {
        const { code } = warning;

        if (code === "css-unused-selector") {
            return;
        }

        handler(warning);
    },
    preprocess: vitePreprocess(),
};

export default config;
