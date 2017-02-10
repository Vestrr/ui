'use strict';

angular.module('core').factory('User', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('users', id).get(params);
      }
      return Restangular.all('users').getList(params);
    }
  }
}]);