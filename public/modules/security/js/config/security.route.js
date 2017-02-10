'use strict';

angular.module('security').config(['$stateProvider', function($stateProvider) {
    $stateProvider.
        state("security",
        {
            parent: "root",
            url: "/login",
            views: {
                "": {
                    controller: "SecurityCtrl",
                    templateUrl: "modules/security/views/index.html"
                },
                "security.partial@security": {
                    controller: "SecurityCtrl",
                    templateUrl: "modules/security/views/partial.html"
                }
            }
        });
}]);
