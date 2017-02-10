'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'AppsRouterConfig';

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

    it('should respond apps state', function() {
        expect(state.href('apps')).toEqual('#/apps');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/apps');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/apps");
    });
});
