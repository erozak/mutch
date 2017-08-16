// imports
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');

// opts
const pugOpt = {
  in: './static/src/views/*.pug',
  out: './static/dist/views',
  watch: './static/src/views/**/*.pug',
  opts: {
    doctype: 'html',
    pretty: true,
  },
};

const scriptOpt = {
  in: './static/src/scripts/*.js',
  out: './static/dist/scripts/',
  watch: './static/src/scripts/*.js',
};

const sassOpt = {
  in: './sass/main.scss',
  out: './static/dist/styles/',
  watch: './sass/**/*.scss',
  opts: {
    outputStyle: 'nested',
    precision: 8,
    errLogToConsole: true,
  },
};

// tasks
gulp.task('default', () => {
  livereload.listen();
  gulp.watch(pugOpt.watch, ['views']);
  gulp.watch(scriptOpt.watch, ['scripts']);
  gulp.watch(sassOpt.watch, ['styles']);
});

gulp.task('views', () => (
  gulp
    .src(pugOpt.in)
    .pipe(pug(pugOpt.opts))
    .pipe(gulp.dest(pugOpt.out))
    .pipe(livereload())
));

gulp.task('scripts', () => (
  gulp
    .src(scriptOpt.in)
    .pipe(plumber())
    .pipe(gulp.dest(scriptOpt.out))
    .pipe(livereload())
));

gulp.task('styles', () => (
  gulp
    .src(sassOpt.in)
    .pipe(plumber())
    .pipe(sass(sassOpt.opts))
    .pipe(gulp.dest(sassOpt.out))
    .pipe(livereload())
));
