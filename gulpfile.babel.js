import { src, dest, watch, parallel, series } from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import minify from 'cssnano';
import simpleVars from 'postcss-simple-vars';
import rename from 'gulp-rename';

// Directories
const SRC_DIR = 'src';
const BUILD_DIR = 'dist';

// Source Files
const CSS_GLOB = `${SRC_DIR}/**/*.css`;
const CSS_PARTIALS = `!${SRC_DIR}/**/_*.css`;
const JS_GLOB = `${SRC_DIR}/**/*.js`;


// Task to clean the build directory
export const clean = () => del([BUILD_DIR])


// Build CSS files
export const css = () => src([CSS_GLOB, CSS_PARTIALS], { base: SRC_DIR })
  .pipe(postcss([autoprefixer, cssnext, simpleVars]))
  .pipe(dest(BUILD_DIR))
  .pipe(postcss([minify]))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(BUILD_DIR));


// Watch Task
export const watchSrc = () => watch(CSS_GLOB, css);


// Task sequences
export const dev = series(clean, css, watchSrc);
export const dist = series(clean, css);

// Default task export
export default dev;
