'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function ($location, $modal, $routeParams, watchlistService) {

   return{
    templateUrl: 'views/templates/watchlist-panel.html',
    restrict: 'E',
    scope: {},
    link: function($scope){
     $scope.watchlist = {};

     var addListModal = $modal({
      scope: $scope,
      template: 'views/templates/addlist-modal.html',
      show: false
     });

     // bind model from service to the scope
     $scope.watchlists = watchlistService.query();

     $scope.showModal = function(){
      addListModal.$promise.then(addListModal.show);
     };

     // create new list from fields in modal		
     $scope.createList = function(){
      watchlistService.save($scope.watchlist);
      addListModal.hide();
      $scope.watchlist = {};
     };

     $scope.deleteList = function(list){
      watchlistService.remove(list);
      $location.path('/');
     };

     $scope.currentList = $routeParams.listId;
     $scope.gotoList = function(listId){
      $location.path('watchlist/' + listId); 
     };
    }
   };		
  });
