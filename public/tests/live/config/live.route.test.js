'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'LiveRouterConfig';

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

    it('should respond live state', function() {
        expect(state.href('live')).toEqual('#/live');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/live');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/live");
    });
});
