'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'SettingsRouterConfig';

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

    it('should respond settings state', function() {
        expect(state.href('settings')).toEqual('#/settings');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/settings');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/settings");
    });
});
