angular.module('myApp', [])
    .directive('optIn', function () {
        return {
            templateUrl: 'opt-in-template.html',
            restrict: 'AE',
            transclude: true,
        }
    });
