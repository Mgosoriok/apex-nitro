var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

module.exports = function(config, browsersync) {
    // copy lib files as is
    gulp.task('lib-gulp', function() {
        return gulp.src(config.paths.src + config.assets.lib + '**/' + config.files.all)
            .pipe(gulp.dest(config.paths.dist + config.assets.lib));
    });

    // copy lib files as is
    gulp.task('lib', ['lib-gulp'], function() {
        browsersync.reload();
    });
}