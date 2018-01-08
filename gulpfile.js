const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task("styles", () => {
    return gulp.src("style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./build"))
});

gulp.task("watch", () => {return gulp.watch("style.css", ["styles"])});