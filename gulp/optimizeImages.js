import gulp from "gulp";
import squoosh from "gulp-squoosh";
import path from "path";
import changed from "gulp-changed";
import svgMin from "gulp-svgmin";
import rename from "gulp-rename";

const destinationPath = "build/img";

function optimizeVector() {
	return gulp
		.src("source/images/**/*.svg")
		.pipe(svgMin())
		.pipe(gulp.dest(destinationPath));
}

const SIZES = [
	{
		suffix: "@3x",
		scale: 1,
	},
	{
		suffix: "@2x",
		scale: 2 / 3,
	},
	{
		suffix: "",
		scale: 1 / 3,
	},
];

async function optimizeRaster() {
	return await SIZES.forEach(({ suffix, scale }) => gulp
		.src("source/images/**/*.{jpg,png}")
		.pipe(changed(destinationPath))
		.pipe(
			squoosh(({
				filePath, width
			}) => ({
				preprocessOptions: {
					resize: {
						width: width * scale,
					},
				},
				encodeOptions: {

					avif: {},
					webp: {
						quality: 80,
					},
					...(path.extname(filePath) === ".png" ?
						{
							oxipng: {},
						} :
						{
							mozjpeg: {
								quality: 80,
							},
						}),
				},
			}))
		)

		.pipe(
			rename({
				suffix,
			})
		)
		.pipe(gulp.dest(destinationPath)));
}

export default gulp.parallel(optimizeVector, optimizeRaster);
