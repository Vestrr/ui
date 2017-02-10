'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'NewModuleRouterConfig';

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

    it('should respond newModule state', function() {
        expect(state.href('newModule')).toEqual('#/newModule');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/newModule');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/newModule");
    });
});
