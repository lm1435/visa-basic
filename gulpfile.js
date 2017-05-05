var gulp = require('gulp');

//plugins
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src("css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task('watch', function(){
  gulp.watch('css/*.scss', ['sass']);
});

gulp.task("default", ["watch", "sass"]);
