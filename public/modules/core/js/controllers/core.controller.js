'use strict';

angular.module('core')
    .controller("CoreCtrl", ['$scope', 'ScrollSmooth', '$state', 'Admin', '$window', '$rootScope', '$pusher', '$mdDialog', function ($scope, ScrollSmooth, $state, Admin, $window, $rootScope, $pusher, $mdDialog) {

        var Pusher = require('pusher'); // jshint ignore:line

        var client = new Pusher("4e7e496b8c981a08b34a", {
          authEndpoint: "http://localhost/api/admin/pusher/auth"
        });


        $scope.new_dress = function (ev) {
          console.log("YOOOOOOO")
          $mdDialog.show({
            controller: NewDressCtrl,
            templateUrl: 'modules/core/views/new_dress.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
        }

        function NewDressCtrl($scope) {

          $scope.progress = {
            value: 20,
            numval: 1
          }


          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.next = function () {
            $scope.progress.numval++;
            $scope.progress.value += 20;
          }
        }


        $scope.AppName = 'Modify me in Core Module';
        $scope.ModuleTest = 'Modify me in Core Module';

        Admin.me().then(function(resp){

          console.log(resp)

          $rootScope.current_member = resp
          if (resp.selected_company){
              $rootScope.cache_company_name = resp.selected_company.name
          }

          var pusher = $pusher(client);


          var my_channel = pusher.subscribe('private-' + resp.company.guid);
          my_channel.bind('scope-update',
            function(data) {
              console.log("yo")
              $scope.$broadcast('scope-update', data);
            }
          );

        })

        var moment = require('moment')

        $scope.display_correct_time = function(time) {
          return moment(time).calendar()
        }

        $scope.scrollSmoothToElementId = function (elementId) {
            ScrollSmooth.toElementId(elementId);
        };

        $scope.calculate_percentage = function(current, cap) {
            return (current / cap) * 100
        }

        $scope.scrollSmoothToTop = function () {
            ScrollSmooth.toTop();
        };

        $scope.go = function (state, params) {
          $state.go(state, params)
        }

        $scope.is = function (state) {
          return $state.current.name === state
        }

        $scope.is_not = function (state) {
          return $state.current.name !== state
        }

        $scope.$state = $state;

        console.log($scope.$state)

        $scope.shorten = function (str, length) {
          if (str && str.length > length){
            str = str.slice(0, length)
            str = str + "..."
          }

          return str
        }
    }]);