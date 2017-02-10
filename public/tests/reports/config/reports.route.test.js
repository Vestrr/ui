'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'ReportsRouterConfig';

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

    it('should respond reports state', function() {
        expect(state.href('reports')).toEqual('#/reports');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/reports');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/reports");
    });
});
