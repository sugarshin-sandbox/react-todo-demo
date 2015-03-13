gulp = require 'gulp'
browserSync = require 'browser-sync'
sequence = require 'gulp-sequence'
requireDir = require 'require-dir'
C = require('./package.json').projectConf

requireDir './tasks'

reload = browserSync.reload

gulp.task 'serve', ->
  browserSync
    notify: false
    startPath: '/'
    server:
      baseDir: './'
      index: "#{C.PUBLIC}/"
      routes:
        '/': "#{C.PUBLIC}/"

gulp.task 'default', ['css', 'watch-js', 'serve'], ->
  gulp.watch ["./#{C.SRC}/**/*.styl"], ['css', reload]
gulp.task 'build', sequence 'clean', ['css', 'build-js']
