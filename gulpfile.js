'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const webpack = require('gulp-webpack');
const babel = require('gulp-babel');
const named = require('vinyl-named');

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

gulp.task('webpack:watch', function() {
  return gulp.src(['source/public/react/apps/**/*.tsx'])
    .pipe(named())
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          }
        ]
      }
    }))
    .pipe(gulp.dest('release/public/react/apps/'));
});