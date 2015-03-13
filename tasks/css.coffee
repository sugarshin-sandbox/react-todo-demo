gulp = require 'gulp'
stylus = require 'gulp-stylus'
nib = require 'nib'
plumber = require 'gulp-plumber'
notify = require 'gulp-notify'
rename = require 'gulp-rename'
C = require('../package.json').projectConf

path =
  css: [
    "#{C.SRC}/**/*.styl"
    "!#{C.SRC}/**/import/*.styl"
    "!#{C.SRC}/**/_**/*.styl"
    "!#{C.SRC}/**/_*.styl"
  ]

gulp.task 'css', ->
  gulp.src path.css
    .pipe plumber
      errorHandler: notify.onError '<%= error.message %>'
    .pipe stylus
      use: nib()
      compress: true
    .pipe rename dirname: ''
    .pipe gulp.dest C.PUBLIC, cwd: './'