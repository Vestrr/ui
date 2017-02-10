'use strict';

angular.module('security').factory('SecurityService', [function () {

    return {
        getDummyText: function(){
            return 'dummyText';
        }
    };

}]);
