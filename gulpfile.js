var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    typescript = require('gulp-typescript'),
    notify = require('gulp-notify'),
    del = require('del');

    gulp.task('styles', function(){
        return gulp.src('src/styles/footer.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('clean', function(cb) {
        del(['build/assets/css'], cb);
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('styles');
    });

    gulp.task('watch', function() {
      gulp.watch("src/styles/*.css", ['styles']);
    });
