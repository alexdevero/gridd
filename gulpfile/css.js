'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import csscomb from 'gulp-csscomb'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import cssimport from 'postcss-import'
import cssnested from 'postcss-nested'
import csssimplevars from 'postcss-simple-vars'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import pxtorem from 'postcss-pxtorem'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

const cssnextConfig = {
  browsers: [
    'Firefox >= 48',
    'Chrome >= 54',
    'ie >= 10',
    'last 4 versions',
    'Safari >= 8'
  ]
}

const pxtoremConfig = {
  rootValue: 16,
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: ['html', 'body'],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}

// Compile CSS with PostCSS - dev
gulp.task('css:dev', () => {
  const processors = [
    cssimport(),
    cssnested(),
    cssnext(cssnextConfig),
    csssimplevars(),
    pxtorem(pxtoremConfig)
  ]

  return gulp.src('./src/gridd.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(csscomb())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})

// Compile CSS with PostCSS - production
gulp.task('css:prod', () => {
  const cssnanoConfig = {
    autoprefixer: false
  }

  const processors = [
    cssimport(),
    cssnested(),
    cssnext(cssnextConfig),
    csssimplevars(),
    pxtorem(pxtoremConfig),
    cssnano(cssnanoConfig)
  ]

  return gulp.src('./src/gridd.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})
