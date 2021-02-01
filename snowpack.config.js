/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    experiments: {
        /* ... */
    },
    mount: {
        /* ... */
        public: { url: "/", static: true, resolve: false },
        src: "/",
    },
    plugins: [
        "@snowpack/plugin-svelte",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-typescript"
    ],
    alias: {
        "components": "./src/components",
        "@app": "./src",
    },
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        bundle: true,
        minify: true,
        target: "es2018",
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        baseUrl: "./"
    },
};