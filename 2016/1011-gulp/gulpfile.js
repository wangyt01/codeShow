var gulp = require('gulp');
var uglify=require('gulp-uglify');
var concat = require('gulp-concat');
var paths={
	script:['js/index.js','js/main.js']
}

gulp.task('default', function() {
	// console.log('ok');
  // place code for your default task here
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('build'));
});