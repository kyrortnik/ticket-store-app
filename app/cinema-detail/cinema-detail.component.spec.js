'use strict';

describe('cinemaList', function() {

  // Load the module that contains the `cinemaList` component before each test
  beforeEach(module('cinemaList'));

  // Test the controller
  describe('CinemaListController', function() {

    it('should create a `cinemas` model with 3 cinemas', inject(function($componentController) {
      var ctrl = $componentController('cinemaList');

      expect(ctrl.cinemas.length).toBe(3);
    }));

  });

});
