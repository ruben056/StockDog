//'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var MainCtrl, scope ;

  var wl1 = {id:1, name:'list1', description:'list1...'};
  var wl2 = {id:2, name:'list2', description:'list2...'};

  var watchlistServiceMock = {
  	query: function(){
	 return [wl1, wl2];
	}
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      watchlistService: watchlistServiceMock
      // place here mocked dependencies
    });
  }));

  it('should contain result of the query', function () {
    expect(scope.watchlists).toContain(wl1, wl2);
  });
});
