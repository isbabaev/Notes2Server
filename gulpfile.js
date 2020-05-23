const gulp = require('gulp');

const lnk = require('lnk');

// создаем ссылку (синхронизация файлов sync-interfaces)
gulp.task('sync', function () {
  lnk(['src/sync-interfaces'],'../client/src');
});

