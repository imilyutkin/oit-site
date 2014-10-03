var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    del = require('del');

    gulp.task('styles', function(){
        return gulp.src('app/src/css/footer.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/build/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('clean', function(cb) {
        del(['app/build/assets/css']);
        del(['app/build/assets/js']);
        del(['app/build/assets'], cb);
    });

    gulp.task('scripts', function() {
        return gulp.src('app/src/js/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify(''))
        .pipe(gulp.dest('app/build/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('pages', function(){
        gulp.src('app/src/*.html')
          .pipe(gulp.dest('app/build/assets'));
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('styles');
        gulp.start('scripts');
        gulp.start('pages');
    });

    gulp.task('watch', function() {
      gulp.watch("app/src/js/*.js", ['scripts']);
      gulp.watch("app/src/css/*.css", ['styles']);
      gulp.watch("app/src/*.html", ['pages']);
    });
