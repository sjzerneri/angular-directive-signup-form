var app = angular.module('myApp', []);

app.directive('optIn', function () {
    return {
        templateUrl: 'opt-in-template.html',
        restrict: 'AE',
        transclude: true,
    }
});
