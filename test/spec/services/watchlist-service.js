'use strict';

describe('Service: watchlistService', function () {

  // load the service's module
  beforeEach(module('stockDogApp'));

  // instantiate service
  var watchlistService;
  beforeEach(inject(function (_watchlistService_) {
    watchlistService = _watchlistService_;
  }));

  it('should save query and remove watchlists', function () {
    expect(!!watchlistService.save).toBe(true);
    expect(!!watchlistService.query).toBe(true);
    expect(!!watchlistService.remove).toBe(true);

    var wl1 = {value:'someval'};
    var wl2 = {value:'someotherval'};

    watchlistService.save(wl1);
    watchlistService.save(wl2);

    expect(watchlistService.query()).toContain(wl1, wl2);
    expect(watchlistService.query('0')).toBe(wl1);
    expect(watchlistService.query('1')).toBe(wl2);

    watchlistService.remove(wl1);
    expect(watchlistService.query()).toContain(wl2);
  });

});
