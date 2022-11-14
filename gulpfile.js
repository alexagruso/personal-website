const gulp = require("gulp");
const ts = require("gulp-typescript");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const nodemon = require("gulp-nodemon");
const path = require("path");

const buildSass = () => {
    return gulp
        .src("./public/styles/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("./dist/public/styles/"));
};

// compile and bundle sass
gulp.task("build:sass", buildSass);

const buildBrowserScripts = () => {
    const tsBrowserScripts = ts.createProject(
        path.resolve(__dirname, "./public/scripts/tsconfig.json")
    );

    tsBrowserScripts
        .src()
        .pipe(tsBrowserScripts())
        .js.pipe(concat("bundle.js"))
        .pipe(gulp.dest("./dist/public/scripts/"));

    return browserify({
        entries: "./dist/public/scripts/bundle.js",
    })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./dist/public/scripts/"));
};

// compile and bundle browser scripts
gulp.task("build:browserScripts", buildBrowserScripts);

// dev server
gulp.task("dev", async () => {
    gulp.parallel("build:sass", "build:browserScripts")();

    gulp.watch("./public/styles/**/*.scss", buildSass);
    gulp.watch("./public/scripts/**/*.ts", buildBrowserScripts);

    return nodemon({
        exec: "ts-node -r tsconfig-paths/register ./src/server.ts",
        ext: "ts, ejs",
        watch: ["./src/**"],
    });
});
