var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var connect = require('gulp-connect');
var preprocess = require('gulp-preprocess');

var config = {
    prod: !!util.env.prod
};

gulp.task('bundle', function() {
    return gulp.src('./app/app.js')
        .pipe(webpackStream(config.prod ? require('./webpack.prod.config.js'): require('./webpack.dev.config.js'), webpack))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('copy', function() {
    gulp.src('./app/index.html')
        .pipe(config.prod ? preprocess({context: { ENV: 'prod'}}): preprocess({context: { ENV: 'dev'}}))
        .pipe(gulp.dest('./dist/'));
    gulp.src('./app/images/*')
        .pipe(gulp.dest('./dist/images/'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        root: 'dist',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.html'], ['bundle', 'copy']);
    gulp.watch(['./app/**/*.js'], ['bundle']);
});

gulp.task('default', ['bundle', 'copy', 'connect', 'watch']);
