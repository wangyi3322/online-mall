var gulp = require('gulp');

var  minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');//css合并
var  uglify = require('gulp-uglify');


//定一个名为css的命令
gulp.task('css',function(){
	gulp.src('./css/*.css')
		.pipe(concat('index-merge.css'))		
		.pipe(minifycss())		
		.pipe(gulp.dest('dist/'));
});

 

gulp.task('jsmin', function () {
    gulp.src('./js/app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});