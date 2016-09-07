var gulp = require('gulp');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var bowerPkg = require('./bower.json');
var banner = '/*!\n' +
    '* bootstrap-ajax-content <%= pkg.version %> (https://github.com/abreksa4/bootstrap-ajax-content)\n' +
    '* Copyright 2016 Andrew Breksa\n' +
    '* Licensed under the MIT license\n' +
    '*/\n';
var src = 'src/';
var dist = 'dist/';

gulp.task('js', function () {
    return gulp.src(src + 'bootstrap-ajax-content.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(header(banner, {pkg: bowerPkg}))
        .pipe(gulp.dest(dist));
});

gulp.task('lib', function () {
    return gulp.src([src + '../lib/*'])
        .pipe(gulp.dest(dist));
});

gulp.task('merge', function () {
    return gulp.src([src + '/**/*.html', src + 'index.html', src + '../lib/*', src + 'spin.gif'])
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function () {
    gulp.watch(src + 'bootstrap-ajax-content.js', ['js']);
    gulp.watch([src + '/**/*.html', src + 'index.html'], ['merge'])
});

gulp.task('default', ['js', 'merge', 'lib']);