"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
// const rtlcss = require("gulp-rtlcss");
// const rename = require("gulp-rename");
// const cleanCSS = require("gulp-clean-css");

// File Paths
const filePaths = {
  scss: { src: "./src/assets/sass/**/*.scss", dest: "./src/assets/css" },
  rtlcss: { src: "./src/assets/css/app.css", dest: "./src/assets/css" },
};

// SCSS task
function scssTask() {
  return src(filePaths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(src(filePaths.scss.src))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest(filePaths.scss.dest))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("app.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest(filePaths.scss.dest));
}


// // RTL task

// function rtlTask() {
//   return (
//     src(filePaths.rtlcss.src)
//       .pipe(sourcemaps.init())
//       //app.css
//       .pipe(rtlcss())
//       .pipe(rename({ suffix: ".rtl" }))

//       .pipe(sourcemaps.write("."))
//       .pipe(dest(filePaths.rtlcss.dest))
//   );
// }

// function rtlMiniTask() {
//     return (
//       src(filePaths.rtlcss.src)
//         .pipe(sourcemaps.init())
//         //app.min.css
//         .pipe(rtlcss())
//         .pipe(cleanCSS())
//         .pipe(rename({ suffix: ".rtl.min" }))
  
//         .pipe(sourcemaps.write("."))
//         .pipe(dest(filePaths.rtlcss.dest))
//     );
//   }

// Watch task
function watchFiles() {
  watch(
    [
      filePaths.scss.src,
    ],
    series(parallel(scssTask))
  );
}

exports.default = series(
  parallel(scssTask),
//   rtlTask,
//   rtlMiniTask,
  watchFiles
);
