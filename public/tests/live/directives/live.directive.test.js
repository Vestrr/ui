'use strict';

var dependencies = require('../test.dependencies');

var objectToTest = 'liveDirective';

describe(objectToTest, function () {
    var compile, scope, directiveElem, httpBackend;

    dependencies.configureDepencencies();

    beforeEach(inject(function($compile, $rootScope, $httpBackend){
      compile = $compile;
      scope = $rootScope.$new();

      httpBackend = $httpBackend;
      httpBackend.when('GET', 'modules/core/resources/locale-en_US.json')
        .respond(200);

      httpBackend.when('GET', 'modules/core/views/nav.html')
        .respond(200);

      httpBackend.when('GET', 'modules/core/views/footer.html')
        .respond(200);

      httpBackend.expectGET('modules/core/resources/locale-en_US.json');
      httpBackend.expectGET('modules/core/views/nav.html');
      httpBackend.expectGET('modules/core/views/footer.html');
    }));

    function getCompiledElement(template){
      var element = angular.element(template);
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement.html();
    }

    it('directive template attribute should be correct', function () {
      directiveElem = getCompiledElement('<div live-directive></div>');

      expect(directiveElem).toContain('<div><span>Directive in: live, with name: liveDirective</span></div>');
    });

    it('directive template element should be correct', function () {
      directiveElem = getCompiledElement('<live-directive></live-directive>');

      expect(directiveElem).toContain('<div><span>Directive in: live, with name: liveDirective</span></div>');
    });
});