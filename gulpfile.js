'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var debug = require('gulp-debug');

gulp.task('sass', function () {
    gulp.src('./assets/sass/*.sass')
        .pipe(debug())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/*.sass',['sass']);
});
