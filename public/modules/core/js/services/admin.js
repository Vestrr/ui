'use strict';

angular.module('core').factory('Admin', ['Restangular', function (Restangular) {
  return {
    me: function() {
      return Restangular.one('admins').get();
    }
  }
}]);