'use strict';

angular.module('core').factory('Order', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      if (id){
        return Restangular.one('orders', id).get(params);
      }
      return Restangular.all('orders').getList(params);
    },
    stock_movements: function(id, params) {
      return Restangular.one('orders', id).all('stock_movements').getList(params);
    }
  }
}]);