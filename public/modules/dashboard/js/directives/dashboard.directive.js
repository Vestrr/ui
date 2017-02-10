'use strict';

angular.module('dashboard').directive('dashboardDirective', [function () {

  return {
    restrict: 'AE', // A: Attribute, E: Element
    template: '<div><span>Directive in: dashboard, with name: dashboardDirective</span></div>'
  };

}]);
