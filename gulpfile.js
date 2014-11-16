var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    del = require('del');

    gulp.task('styles', function(){
        return gulp.src('app/src/css/*.css')
        // .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('app/build/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('clean', function(cb) {
        del(['app/build/assets/css']);
        del(['app/build/assets/js']);
        del(['app/build/assets'], cb);
    });

    gulp.task('scripts', function() {
        return gulp.src('app/src/js/**.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify(''))
        .pipe(gulp.dest('app/build/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    gulp.task('styleLibs', function(){
        return gulp.src('app/src/css/libs/*.css')
          .pipe(gulp.dest('app/build/assets/css/libs'))
    });

    gulp.task('scriptsLibs', function(){
        gulp.src('app/src/js/libs/*.js')
          .pipe(gulp.dest('app/build/assets/js/libs'));
    });

    gulp.task('images', function(){
        gulp.src('app/src/images/*.png')
          .pipe(gulp.dest('app/build/assets/images/'))
        return gulp.src( 'app/src/images/pcap/*.png')
          .pipe(gulp.dest('app/build/assets/images/'))
    });

    gulp.task('icons', function(){
        return gulp.src('app/src/images/icons/*.svg')
          .pipe(gulp.dest('app/build/assets/images/icons'))
    });

    gulp.task('pages', function(){
        gulp.src('app/src/*.html')
          .pipe(gulp.dest('app/build/assets'));
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('styles');
        gulp.start('styleLibs');
        gulp.start('scripts');
        gulp.start('scriptsLibs');
        gulp.start('pages');
        gulp.start('images');
        gulp.start('icons');
    });

    gulp.task('watch', function() {
      gulp.watch("app/src/js/*.js", ['scripts']);
      gulp.watch("app/src/css/*.css", ['styles']);
      gulp.watch("app/src/*.html", ['pages']);
    });
