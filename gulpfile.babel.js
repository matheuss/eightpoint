import { src, dest, watch, parallel, series } from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import minify from 'cssnano';
import rename from 'gulp-rename';

// Directories
const SRC_DIR = 'src';
const BUILD_DIR = 'dist';

// Source Files
const CSS_GLOB = `${SRC_DIR}/**/*.css`;
const CSS_PARTIALS = `!${SRC_DIR}/**/_*.css`;
const JS_GLOB = `${SRC_DIR}/**/*.js`;

export const clean = () => del([BUILD_DIR])

export const css = () => src([CSS_GLOB, CSS_PARTIALS], { base: SRC_DIR })
  .pipe(dest(BUILD_DIR))
  .pipe(postcss([minify]))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(BUILD_DIR));

export const watchSrc = () => watch(CSS_GLOB, css);

export const dev = series(clean, css, watchSrc);
export const dist = series(clean, css);

export default dev;
