'use strict';

angular.module('core').controller('NavCtrl', ['$scope', 'Menus', '$translate', '$state', 'Company', '$window', '$rootScope',  function($scope, Menus, $translate, $state, Company, $window, $rootScope){
    $scope.PartialTest = "Modify me in Core Module's Nav Controller";

    $scope.localeMenu = Menus.getMenu('locales');
    $scope.localeMenuItems = $scope.localeMenu.items;

    $scope.topBarMenu = Menus.getMenu('topBar');
    $scope.topBarMenuItems = $scope.topBarMenu.items;

    console.log($rootScope.cache_company_name)

    // if($rootScope.current_admin && $rootScope.current_admin.selected_company){
    //     $scope.searchText = $rootScope.current_admin.selected_company.name
    // }

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

    $scope.querySearch = function (query) {
      return Company.get(false, {name: query}).then(function(response){
        console.log(response)

        return response
      })
    }

    $scope.selectedItemChange = function(company) {
        if (company){
            $rootScope.current_admin.selected_company = company
            $rootScope.current_admin.put()
        }
    }
}]);