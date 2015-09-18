var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
 

gulp.task('default', function () {
    return gulp.src('spec/*-spec.js')
        .pipe(jasmine())
        .once('end', function() {
            // TODO: find what's running and stop it
            process.exit();
        });
});