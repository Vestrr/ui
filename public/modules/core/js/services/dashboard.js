'use strict';

angular.module('core').factory('Dashboard', ['Restangular', function (Restangular) {
  return {
    get: function(params) {
      return Restangular.one('dashboards').get(params);
    }
  }
}]);