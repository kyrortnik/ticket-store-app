'use strict';

angular.
  module('cinemaTicketApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cinemas', {
          template: '<cinema-list></cinema-list>'
        }).
        when('/cinemas/:cinemaId', {
          template: '<cinema-detail></cinema-detail>'
        }).
        otherwise('/cinemas');
    }
  ]);