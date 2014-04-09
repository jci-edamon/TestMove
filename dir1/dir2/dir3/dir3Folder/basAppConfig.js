/*
* (C) Copyright 2013 Johnson Controls, Inc.
* Use or Copying of all or any part of this program, except as
* permitted by License Agreement, is prohibited.
*/

/*globals angular, window, document */
/*jslint todo: true, unparam: true */

angular.module('basAppConfig', [])
    .constant('CONFIG', {
        'SHOW_NAV_WIDTH'                        : 960,
        'VISIBLE_DISPLAY_DATA_DIRECT'           : 3,
        'VISIBLE_DISPLAY_DATA_SERVING'          : 1,
        'EQUIPMENT_SERVICE_TIMEOUT'             : 8000,
        'EQUIPMENT_SERVICE_TIMEOUT'             : 8000,
        'EQUIPMENT_DEFINITION_SERVICE_TIMEOUT'  : 8000,
        'SPACES_SERVICE_TIMEOUT'                : 8000,
        'NUMBER_OF_DISPLAY_COLUMNS'             : 8
    })
    .constant('DATA_URLS', (function () {
        'use strict';

        var URLS,
            baseUrl = window.location.pathname;

        if (baseUrl.substr(baseUrl.length - 1) !== '/') {
            baseUrl += '/';
        }

        URLS = {
            ROOT_PATH       : baseUrl,
            SEARCH          : baseUrl + 'Search/SearchItems?searchCriteria=',
            DICTIONARY      : baseUrl + 'translation/getdictionary',
            SPACES          : baseUrl + 'Spaces/GetSpaces?spaceId=',
            EQUIPMENT       : baseUrl + 'Equipment/ServingSpace?spaceId=',
            EQUIPMENT_DEFINITION : baseUrl + 'EquipmentSummary/GetEquipmentDefinitionsUsedInSpace?spaceId={{spaceId}}&category={{category}}&numberOfDisplayColumns={{numberOfDisplayColumns}}',
            EQUIPMENT_SUMMARY : baseUrl + 'EquipmentSummary/GetEquipmentUsedInSpace?spaceId={{spaceId}}&equipmentDefinitionId={{equipmentDefinitionId}}&category={{category}}&numberOfDisplayColumns={{numberOfDisplayColumns}}',
            PREFERENCES_STATUS: baseUrl + 'Preferences/GetSystemPreferencesStatusColors',
            CommandView     : baseUrl + 'Command/GetCommands?',
            CommandExecute  : baseUrl + 'Command/SendCommand?'
        };

        return URLS;
    }()));

