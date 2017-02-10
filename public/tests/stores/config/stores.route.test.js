'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'StoresRouterConfig';

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

    it('should respond stores state', function() {
        expect(state.href('stores')).toEqual('#/stores');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/stores');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/stores");
    });
});
