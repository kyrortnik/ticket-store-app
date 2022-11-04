'use strict';

// Register `cinemaList` component, along with its associated controller and template
angular.
  module('cinemaList').
  component('cinemaList', {
    templateUrl: 'cinema-list/cinema-list.template.html',
    controller: function CinemaListController() {
      this.cinemas = [
        {
          name: 'Aurora',
          address: 'l. Pritytskogo 23, Minsk, Belarus'
        }, {
          name: 'Oktyabr',
          address: '73 Independence Ave., Minsk 220013, Belarus'
        }, {
          name: 'Belarus',
          address: 'st. Romanovskaya Sloboda 28, Minsk, Belarus'
        }
      ];
    }
  });
