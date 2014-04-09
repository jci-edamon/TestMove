/*
* (C) Copyright 2013 Johnson Controls, Inc.
* Use or Copying of all or any part of this program, except as
* permitted by License Agreement, is prohibited.
*/

/*globals angular, window, document */
/*jslint todo: true, unparam: true */

(function () {
    'use strict';

    var dictionaryService = angular.injector(['basAppConfig']).get('dictionaryService');

    dictionaryService.init().then(
        function () {
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['basApp']);
            });
        }
    );
}());