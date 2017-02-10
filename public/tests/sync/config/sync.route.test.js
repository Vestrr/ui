'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'SyncRouterConfig';

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

    it('should respond sync state', function() {
        expect(state.href('sync')).toEqual('#/sync');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/sync');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/sync");
    });
});
