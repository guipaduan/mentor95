const gulp = require('gulp')
const concat = require('gulp-concat')
const folders = require('gulp-folders-4x')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')


/**
 * Sass watcher
 */
gulp.task('css:watch', function() {
  return gulp.src([
    'app/src/scss/main.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('app/dist/css'))
})



/**
 * Javascript watcher
 */
gulp.task('js:watch', function() {
  return gulp.src([
    'app/src/js/components/*.js',
    'app/src/js/pages/*.js',
    'app/src/js/main.js',
  ])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('app/dist/js/'))
})



/**
 * Watch files & Builders
 */
gulp.task('build:dev', function() {
  gulp.watch(['app/src/scss/**/*.scss'], gulp.series('css:watch'))
  gulp.watch(['app/src/js/**/*.js'], gulp.series('js:watch'))
})