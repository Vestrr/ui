'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'CompaniesRouterConfig';

describe(objectToTest, function () {
    var rootScope,
        state,
        location;

    dependencies.configureDepencencies();

    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond companies state', function() {
        expect(state.href('companies')).toEqual('#/companies');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/companies');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/companies");
    });
});
