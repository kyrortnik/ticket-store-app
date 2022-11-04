angular.
  module('cinemaTicketApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cinema', {
          template: '<cinemas-list></cinemas-list>'
        }).
        when('/cinema/:cinemaId', {
          template: '<cinema-detail></cinema-detail>'
        }).s
        otherwise('/cinema');
    }
  ]);