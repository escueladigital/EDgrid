var gulp =          require('gulp');
var sass =          require('gulp-sass');
var beautify =      require('gulp-beautify');
var please =        require('gulp-pleeease');
var uglify =        require('gulp-uglify');
var rename =        require('gulp-rename');
var gulpif =        require('gulp-if');
var runSequence =   require('run-sequence');

var config = {
    distMode: false,
    dist: 'dist'
}

gulp.task('scss', function () {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(config.distMode, please({
        "autoprefixer": true,
        "filters": true,
        "rem": true,
        "opacity": true
    })))
    .pipe(gulpif(config.distMode, rename({
        suffix: '.min',
        extname: '.css'
    })))
    .pipe(gulpif(!config.distMode, beautify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('dev', ['scss']);

gulp.task('dist', function() {
    config.distMode = true;
    runSequence(
        'scss'
    );
})

gulp.task('default', ['dist']);
