'use strict';

angular.module('core').factory('Company', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('companies', id).get(id, params);
      }
      return Restangular.all('companies').getList(params);
    }
  }
}]);