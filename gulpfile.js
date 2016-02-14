var	gulp = require("gulp"),
	babel = require("gulp-babel"),
	change = require("gulp-change"),
	concat = require("gulp-concat");
function normalizeStrict(content){
	return "'use strict';"+content.replace(/\'use strict\';/g,"");
}
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
gulp.task("default",["compile jsx","copy lib","copy html"]);
