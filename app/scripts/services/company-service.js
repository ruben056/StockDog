'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.companyService
 * @description
 * # companyService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('companyService', function ($resource) {
    return $resource('companies.json');
  });
