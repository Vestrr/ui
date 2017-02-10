'use strict';

angular.module('core').factory('Settings', ['Restangular', function (Restangular) {
  return {
    get: function(params) {
      return Restangular.one('settings').get(params);
    }
  }
}]);