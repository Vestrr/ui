'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'SecurityRouterConfig';

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

    it('should respond security state', function() {
        expect(state.href('security')).toEqual('#/security');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/security');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/security");
    });
});
