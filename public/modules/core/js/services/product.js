'use strict';

angular.module('core').factory('Product', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('products', id).get(params);
      }
      return Restangular.all('products').getList(params);
    },
    new: function() {
      return Restangular.one('products').one('new').get();
    },
    connections: function(id, params) {
      return Restangular.one('products', id).all('connections').getList(params);
    },
    new_connection: function(id, params) {
      return Restangular.one('products', id).one('connections').one('new').get(params);
    }
  }
}]);