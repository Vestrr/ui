'use strict';

angular.module('core').factory('AppInstance', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      console.log(params, id)
      if (id){
        return Restangular.one('app_instances', id).get(params);
      }
      return Restangular.one('app_instances').get(params);
    },
    new: function(params) {
      return Restangular.one('app_instances').one('new').get(params);
    }
  }
}]);