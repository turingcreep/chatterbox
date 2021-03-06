var	gulp = require("gulp"),
	babel = require("gulp-babel"),
	change = require("gulp-change"),
	concat = require("gulp-concat"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream");
function normalizeStrict(content){
	return "'use strict';"+content.replace(/\'use strict\';/g,"");
}
function manageReducers(content){
	return "import {ReducerContainer} from './reducercontainer';\nlet reducerContainer = new ReducerContainer();\n"+ content + "export default reducerContainer.getReducer;\n";
		
}
gulp.task("flux dev",["compile store"],function(){
		return browserify("dist/js/store.js").bundle()
			.pipe(source("flux.bundle.js"))
			.pipe(gulp.dest("dist/js"));
});
gulp.task("compile reducers",["manage reducers"], function(){
	return gulp.src(["dev/js/reducer.js","dev/js/reducercontainer.js"])
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(gulp.dest('dist/js'));
});
gulp.task("compile store",["compile reducers"], function(){
	return gulp.src("dev/js/store.js")
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(gulp.dest('dist/js'));
});
gulp.task("compile main",function(){
return gulp.src("dev/js/main.jsx")
		.pipe(babel({
			presets:['react']
		}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});
gulp.task("compile jsx",function(){
	return gulp.src("dev/components/**/*.jsx")
		.pipe(babel({
			presets:['react']
		}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'));

});
gulp.task("copy lib",function(){
	return gulp.src(["node_modules/react/dist/react.min.js","node_modules/react-dom/dist/react-dom.min.js","node_modules/babel-browser/browser.min.js","dev/js/main.js"])
		.pipe(gulp.dest("dist/js"));
});
gulp.task("copy html",function(){
	return gulp.src('dev/index.html')
		.pipe(gulp.dest("dist"));
});
gulp.task("manage reducers",function(){
	return gulp.src('dev/js/reducers/*.js')
		.pipe(concat("reducer.js"))
		.pipe(change(manageReducers))	
		.pipe(gulp.dest("dev/js"));
});
gulp.task("default",["flux dev","compile main","compile jsx","copy lib","copy html"]);
