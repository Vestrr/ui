'use strict';

angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("root",
            {
                views: {
                    "": {
                        templateUrl: 'modules/core/views/index.html'
                    }
                }
            })
            .state("home",
            {
                parent: "root",
                url: "/",
                views: {
                    "": {
                        controller: "CoreCtrl",
                        templateUrl: "modules/core/views/main.html"
                    }
                }
            });
    }]).run(['$state', function ($state) {
        $state.transitionTo('home');
    }]);