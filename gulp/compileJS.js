import gulp from "gulp";
import webpackStream from "webpack-stream";
import webpack from "webpack";
import webpackConfig from "../webpack.config.js";

export default function compileJS() {
	return gulp
		.src("source/javascript/main.js")
		.pipe(
			webpackStream(
				{ ...webpackConfig, mode: process.env.NODE_ENV },
				webpack
			)
		)
		.pipe(gulp.dest("build/js"));
}
