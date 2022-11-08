angular.
  module('cinemaTicketApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cinemas', {
          template: '<cinema-list></cinema-list>'
        })
        .when('/cinemas/:cinemaId', {
          template: '<cinema-detail></cinema-detail>'
        })
        .when('/halls/:hallId', {
          template: '<hall-detail></hall-detail>'
        })
        .when('/movies/:movieId', {
          template: '<movie-detail></movie-detail>'
        })
        .otherwise('/cinemas');
    }
  ]);