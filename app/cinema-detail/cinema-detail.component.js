angular.
  module('cinemaDetail').
  component('cinemaDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.cinemaId}}</span>',
    controller: ['$routeParams',
      function CinemaDetailController($routeParams) {
        this.cinemaId = $routeParams.cinemaId;
      }
    ]
  });