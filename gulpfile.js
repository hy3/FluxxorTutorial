var gulp       = require("gulp");
var browserify = require("browserify");
var babelify   = require("babelify");
var source     = require("vinyl-source-stream");

gulp.task("browserify", function() {
    browserify("./src/todo.js", {debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dest/js/"));
});

gulp.task("default", ["browserify"]);