'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'ProductsRouterConfig';

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

    it('should respond products state', function() {
        expect(state.href('products')).toEqual('#/products');
    });

    it('redirects to otherwise page after locationChangeSuccess', function() {
        location.path('/products');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/products");
    });
});
