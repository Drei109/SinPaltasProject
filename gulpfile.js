/**
 * Created by enzo_ on 07/01/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions','> 1%',
                'ie 8',
                'ie 9',
                'ios 6',
                'android 4'],
            cascade: true
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



gulp.task('default', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
