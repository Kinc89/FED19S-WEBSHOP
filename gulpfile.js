// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function(cb) {
  gulp
    .src('scss/*.scss')
    
    .pipe(sass())
    // .pipe(cleanCSS())
    // .pipe(rename({
    //   suffix: ".css"
      
    // }))
    // .pipe(rename({
    //   suffix: ".min"
      
    // }))
    
    .pipe(
      gulp.dest("css")
      )
    
    cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) { 
    gulp.watch('scss/*.scss', gulp.series('sass'));
    cb();
  })
);