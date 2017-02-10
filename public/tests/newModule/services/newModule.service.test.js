'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'NewModuleService';

describe(objectToTest, function () {
    var service;

    dependencies.configureDepencencies();

    beforeEach(inject(function (NewModuleService) {
        service = NewModuleService;
    }));

    it('can get an instance of my factory', function() {
        expect(service).toBeDefined();
    });

    it('can get a correct value from getDummyText', function() {
        expect(service.getDummyText()).toBe('dummyText');
    });
});
