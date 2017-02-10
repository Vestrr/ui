'use strict';

angular.module('core').factory('WebhookEvent', ['Restangular', function (Restangular) {
  return {
    get: function(id, params) {
      console.log(params, id)
      if (id){
        return Restangular.one('webhook_events', id).get(params);
      }
      return Restangular.one('webhook_events').get(params);
    }
  }
}]);