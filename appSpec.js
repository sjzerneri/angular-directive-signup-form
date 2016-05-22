//it should have an image that shows before the form

//it should have a last name input box

describe('optIn', function () {

    var $compile,
        $rootScope;

    beforeEach(module("myApp"));
    beforeEach(module("opt-in-template.html"));
    beforeEach(inject(function (_$rootscope_, _$compile_) {
        $compile = _$compile_;
        $rootScope = _$rootscope_;
    }));
    it('should have a submit button that says Give us yr infoz!', function () {
        var element = $compile("<opt-in></opt-in>")($rootScope);
        $rootScope.digest();
        expect(element.html()).toContain("Give us yr infoz!");
    })
});
