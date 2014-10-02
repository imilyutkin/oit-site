var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    typescript = require('gulp-typescript'),
    notify = require('gulp-notify'),
    del = require('del');

    gulp.task('styles', function(){
        return gulp.src('app/src/styles/footer.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/build/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('clean', function(cb) {
        del(['app/build/assets/css'], cb);
        del(['app/build/assets/js'], cb);
    });

    gulp.task('scripts', function() {
        return gulp.src('app/src/scripts/test_typescript.ts')
        .pipe(rename({suffix: '.min'}))
        .pipe(typescript(''))
        .pipe(uglify(''))
        .pipe(gulp.dest('app/build/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('styles');
        gulp.start('scripts');
    });

    gulp.task('watch', function() {
      gulp.watch("app/src/scripts/*.ts", ['scripts']);
      gulp.watch("app/src/styles/*.css", ['styles']);
    });
