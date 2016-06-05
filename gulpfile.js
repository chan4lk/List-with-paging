var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');
var del = require('del');

gulp.task('clean', function(){
		return del('dest/**/*');
});

gulp.task('compile',['clean'], function(){	
	var tsResult = gulp.src(tscConfig.files)
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts(tscConfig.compilerOptions));

    return tsResult.js
        .pipe(concat('output.js')) // You can use other plugins that also support gulp-sourcemaps
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest('dest'));
});

gulp.task('watch', ['compile'], function(){
	gulp.watch('app/**/*.ts', ['compile']);
});

gulp.task('build', ['watch']);
gulp.task('default', ['build']);