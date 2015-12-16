var _ = require('underscore');
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

//---------------transformers

gulp.task('transform-js', ['clean', 'build-jsx'], function () {
	return gulp.src('js/**/*.js').pipe(gulp.dest('build/js'));
});

gulp.task('transform-css', ['clean'], function () {
	return gulp.src(['./css/**/*.*']).pipe(gulp.dest('build/css'));
});

gulp.task('transform-images', ['clean'], function () {
	return gulp.src(['./images/**/*.*']).pipe(gulp.dest('build/images'));
});

gulp.task('transform-index', ['clean'], function () {
	return gulp.src(['index.html', 'favicon.ico']).pipe(gulp.dest('build'));
});

//---------------babel builder

gulp.task('build-jsx', ['clean'], function () {
	return gulp.src('jsx/**/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('./js/components'));
});

//---------------npm libs

var deps = {
	'require': 'requirejs/require.js',
	'react-with-addons': 'react/dist/react-with-addons.js',
	'flux': 'flux/dist/Flux.js',
	'reactrouter': 'react-router/umd/ReactRouter.min.js',
	'q': 'q/q.js',
	'underscore': 'underscore/underscore-min.js',
	'jquery': 'jquery/dist/jquery.js',
	'bootstrap': function () {
		return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css'])
			.pipe(gulp.dest('build/libs/bootstrap/css'));	
	},
	'bootstrap-fonts': function () {
		return gulp.src('node_modules/bootstrap/dist/fonts/*')
			.pipe(gulp.dest('build/libs/bootstrap/fonts'));	
	},
	'fbemitter': function () {
		var b = browserify({
			entries: 'node_modules/fbemitter/index.js',
			debug: false,
			standalone: 'fbemitter'
		}).bundle();

		return b.pipe(source('index.js'))
			.pipe(rename('fbemitter.js'))
			.pipe(gulp.dest('build'));
	}
};

Object.keys(deps).forEach(function (key) {
	var value = deps[key];
	var defaultCompiler = function (value) {
		return function () {
			return gulp.src('node_modules/' + value).pipe(rename(key + '.js')).pipe(gulp.dest('build'));
		};
	};
	gulp.task(key, ['clean'], typeof value === 'function' ? value : defaultCompiler(value));
});

gulp.task('deps', Object.keys(deps));

//---------------configs

var config = function (env) {
	return gulp.src(['./config.js', './http.js']).pipe(preprocess({
		context: {
			ENV: env
		}
	})).pipe(gulp.dest('./js/'));
};

gulp.task('config:test', _.partial(config, 'test'));
gulp.task('config:dev', _.partial(config, 'dev'));
gulp.task('config:pi', _.partial(config, 'pi'));

//---------------tasks master

gulp.task('test', ['config:test', 'build']);
gulp.task('dev', ['config:dev', 'build']);
gulp.task('pi', ['config:pi', 'build']);

//---------------tasks default

gulp.task('clean', function () {
	return del(['build']);
});

gulp.task('build', ['transform-js', 'transform-css', 'transform-index', 'deps']);

gulp.task('default', ['pi']);
