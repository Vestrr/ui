'use strict';

angular.module('dashboard').config(['$stateProvider', function($stateProvider) {
    $stateProvider.
        state("dashboard",
        {
            abstract: true,
            parent: "root",
            url: "/dashboard",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/index.html"
                }
            }
        })
        .state("dashboard.main",
        {
            parent: "dashboard",
            url: "",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/main.html"
                }
            }
        })
        .state("dashboard.rentals",
        {
            parent: "dashboard",
            url: "/rentals",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/rentals.html"
                }
            }
        })
        .state("dashboard.closet",
        {
            parent: "dashboard",
            url: "/closet",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/closet.html"
                }
            }
        })
        .state("dashboard.payments",
        {
            parent: "dashboard",
            url: "/payments",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/payments.html"
                }
            }
        })
        .state("dashboard.profile",
        {
            parent: "dashboard",
            url: "/profile",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/profile.html"
                }
            }
        })
        .state("dashboard.addresses",
        {
            parent: "dashboard",
            url: "/addresses",
            views: {
                "": {
                    controller: "DashboardCtrl",
                    templateUrl: "modules/dashboard/views/addresses.html"
                }
            }
        });
}]);
