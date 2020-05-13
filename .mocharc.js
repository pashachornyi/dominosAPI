'use strict';
module.exports = {
  diff: true,
  // asyncOnly: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 3000,
  ui: 'bdd',
  'watch-files': ['lib/**/*.js', 'test/**/*.js'],
};