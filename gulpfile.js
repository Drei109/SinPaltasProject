var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch("css/*.css", ['autoprefixer']);
    gulp.watch('./*.html').on("change", reload);
});

gulp.task('autoprefixer', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions','> 1%',
                'ie 8',
                'ie 9',
                'ios 6',
                'android 4'],
            cascade: true
        }))
        .pipe(gulp.dest('css'))
        .pipe(reload({
            stream: true
        }))
});

gulp.task('default', ['watch', 'browser-sync']);