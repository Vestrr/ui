'use strict';

angular.module('core').factory('Sync', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('sync', id).get(params);
      }
      return Restangular.all('sync').getList(params);
    },
    new: function() {
      return Restangular.one('sync').one('new').get();
    }
  }
}]);