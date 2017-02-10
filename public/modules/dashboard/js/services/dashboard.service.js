'use strict';

angular.module('dashboard').factory('DashboardService', [function () {

    return {
        getDummyText: function(){
            return 'dummyText';
        }
    };

}]);
