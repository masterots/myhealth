'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');

var tsProject = ts.createProject(require('./tsconfig.json').compilerOptions);

gulp.task('default', () => {
  return gulp.src(['source/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('release'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch('source/**/*.ts', ['default']);
});