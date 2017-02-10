'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'DashboardRouterConfig';

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

    it('should respond dashboard state', function() {
        expect(state.href('dashboard')).toEqual('#/dashboard');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/dashboard');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/dashboard");
    });
});
