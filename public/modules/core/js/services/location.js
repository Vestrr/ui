'use strict';

angular.module('core').factory('Location', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('locations', id).get(params);
      }
      return Restangular.all('locations').getList(params);
    }
  }
}]);