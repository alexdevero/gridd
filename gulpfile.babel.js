'use strict'

import gulp from 'gulp'
import requireDir from 'require-dir'
import sequence from 'gulp-sequence'

requireDir('./gulpfile/')

const environment = process.env.NODE_ENV
if (environment !== undefined) {
  console.log(`Environment: ${environment}`)
}

// Setup development environment
gulp.task('dev', sequence('css:dev', 'js', 'server'))

// Start server and watch HTML, CSS and JavaScript files for changes
gulp.task('server', ['browser-sync'], () => {
  const browserSync = require('browser-sync')
  const reload = browserSync.reload

  gulp.watch('./example/*.html', reload)
  gulp.watch('./example/styles/**/*.css', ['css'], reload)
  gulp.watch('./example/script/**/*.js', ['js'], reload)
})
