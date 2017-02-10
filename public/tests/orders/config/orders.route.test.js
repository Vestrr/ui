'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'OrdersRouterConfig';

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

    it('should respond orders state', function() {
        expect(state.href('orders')).toEqual('#/orders');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/orders');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/orders");
    });
});
