import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const env = loadEnv("", process.cwd(), "");

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@lib/scss/global.scss" as *;',
            },
        },
    },
    plugins: [sveltekit()],
    preview: {
        port: parseInt(env.PORT),
    },
    server: {
        port: parseInt(env.PORT),
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
