const { series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const lessTask = (cb) => {
    src('src/style/**/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(dest('build/style'));
    cb();
};

const cleanTask = (cb) => {
    del.sync('build');
    cb();
};

const defaultTask = series(cleanTask, lessTask);

const watchTask = (cb) => {
    const watcher = watch(['src/**/*'], defaultTask);

    watcher.on('change', (path) => {
        console.log(`File ${path} was changed`);
    });

    cb();
};

exports.watch = watchTask;
exports.default = defaultTask;
