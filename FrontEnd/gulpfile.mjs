import browserSync from "browser-sync";
import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import sourceMaps from "gulp-sourcemaps";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);
const bs = browserSync.create();

const paths = {
    scss: {
        src: "src/scss/**/*.scss",
        dest: "dist/css",
    },
    html: {
        src: "*.html",
    },
};

// Compile SCSS files to CSS
export function styles() {
    return gulp
        .src(paths.scss.src)
        .pipe(sourceMaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoPrefixer({
                cascade: false,
            })
        )
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(bs.stream());
}

// Serve and watch for changes
export function serve() {
    bs.init({
        server: {
            baseDir: "./",
        },
    });

    gulp.watch(paths.scss.src, styles);
    gulp.watch(paths.html.src).on("change", bs.reload);
}

const dev = gulp.series(styles, serve);

export default dev;
