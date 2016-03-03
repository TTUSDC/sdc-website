(function () {
    var app = angular.module('main', []);

    app.controller('navigation', function () {
        this.state = 'home';

        this.changeState = function(s)
        {
            this.state = s;
        }

        this.isState = function(s)
        {
            return this.state === s;
        }
    });

    app.directive('home', function () {
        return {
            restrict : 'E',
            templateUrl : 'view/home.html'
        };
    });

    app.directive('officers', function () {
        return {
            restrict: 'E',
            templateUrl: 'view/officers.html'
        };
    });

}) ();