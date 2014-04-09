/*
* (C) Copyright 2013 Johnson Controls, Inc.
* Use or Copying of all or any part of this program, except as
* permitted by License Agreement, is prohibited.
*/

/*globals angular, window, document */
/*jslint todo: true, unparam: true */

var app = angular.module('basApp', [
    'ngRoute',
    'ngTouch',
    'ngSanitize',
    'ui.bootstrap',
    'headerModule',
    'spacesModule',
    'searchModule',
    'basAppConfig',
    'dashboardModule',
    'equipmentModule'])
    .config(function ($routeProvider, $locationProvider, DATA_URLS) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: DATA_URLS.ROOT_PATH + 'client/js/dashboard/dashboard.html'
            })
            .when('/space/:spaceId*\/equip/:equipId*', {
                templateUrl: DATA_URLS.ROOT_PATH + 'client/js/dashboard/dashboard.html'
            })
            .when('/space/:spaceId*', {
                templateUrl: DATA_URLS.ROOT_PATH + 'client/js/dashboard/dashboard.html'
            })
            .when('/search/:keyword*\/space/:spaceId*', {
                templateUrl: DATA_URLS.ROOT_PATH + 'client/js/search/search.html'
            })
            .when('/search/:keyword*', {
                templateUrl: DATA_URLS.ROOT_PATH + 'client/js/search/search.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('appController', ['$scope', 'browserService', 'errorService', 'preferenceService', 'CONFIG', function ($scope, browserService, errorService, preferenceService, CONFIG) {
        'use strict';

        $scope.statusColors = {};

        $scope.menuIsOpen = browserService.getWindowWidth() >= CONFIG.SHOW_NAV_WIDTH;

        $scope.menuState = function () {
            return $scope.menuIsOpen;
        };

        $scope.$on('toggleMenu', function () {
            $scope.menuIsOpen = !$scope.menuIsOpen;
        });

        $scope.$on('$locationChangeSuccess', function (event, nextLocation, currentLocation) {
            errorService.purge();
        });

        preferenceService.getStatusColors().then(
            function (statusColors) {
                $scope.statusColors = statusColors;
            },
            function (error) {
                errorService.addError(errorService.ERROR.PREFERENCES, error);
            }
        );
    }])
    .filter('urlencode', function () {
        'use strict';

        return function (input) {
            return encodeURIComponent(input);
        };
    });