'use strict';

angular.
  module('cinemaList').
  component('cinemaList', {
    templateUrl: 'cinema-list/cinema-list.template.html',
    controller: ['$http', function CinemaListController($http) {
      var self = this;
      self.orderProp = 'name';

      $http.get('http://localhost:8080/api/v1/cinemas/').then(function(response) {
        self.cinemas = response.data;
      });
    }]
  });