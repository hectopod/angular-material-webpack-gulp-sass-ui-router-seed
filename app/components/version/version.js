'use strict';

angular.module('myApp.version', [
  require('./interpolate-filter'),
  require('./version-directive')
])

.value('version', '0.1');

module.exports = 'myApp.version';
