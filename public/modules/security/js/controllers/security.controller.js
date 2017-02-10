'use strict';

angular.module('security')
  .controller('SecurityCtrl', ['$scope', '$auth', '$state', '$window', function($scope, $auth, $state, $window){
    
    $scope.user = {};
    $scope.user.email = '';
    $scope.user.password = '';
    
    $scope.login = function() {
      console.log($scope.user)

      $auth.submitLogin($scope.user)
      .then(function(resp) {
        console.log(resp)
        $window.current_admin = resp
        $state.go('dashboard')
      })
      .catch(function(resp) {
        console.log(resp)
      });
    };

    $auth.validateUser().then(function(resp){
      if (resp.signedIn) {
        $state.go('dashboard');
      }
    })

  }]);
