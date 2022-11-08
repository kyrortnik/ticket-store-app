'use strict';

angular.
  module('cinemaDetail').
  component('cinemaDetail', {
    templateUrl: 'cinema-detail/cinema-detail.template.html',
    controller: ['$http', '$routeParams',
      function CinemaDetailController($http, $routeParams) {
        var self = this;
        
        $http.get('http://localhost:8080/api/v1/cinemas/' + $routeParams.cinemaId).then(function(response) {
          self.cinema = response.data;
        });
        $http.get('http://localhost:8080/api/v1/halls/byCinemaId/' + $routeParams.cinemaId).then(function(response) {
          self.cinema.halls = response.data;
        });
      }
    ]
  });