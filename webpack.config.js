// import CircularDependencyPlugin from "circular-dependency-plugin";
// import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
// import OptimizePlugin from "optimize-plugin";

const webpackConfig = {
	target: ["web", "es2017"],
	output: {
		filename: "[name].js",
		module: true,
	},
	experiments: {
		outputModule: true,
	},
	plugins: [
		// new CircularDependencyPlugin(),
		// new DuplicatePackageCheckerPlugin(),
		// new OptimizePlugin(),
	],
};

export default webpackConfig;
