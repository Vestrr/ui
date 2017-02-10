'use strict';

angular.module('security').directive('securityDirective', [function () {

  return {
    restrict: 'AE', // A: Attribute, E: Element
    template: '<div><span>Directive in: security, with name: securityDirective</span></div>'
  };

}]);
