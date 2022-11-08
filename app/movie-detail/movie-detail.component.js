angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$http', '$routeParams',
      function MovieDetailController($http, $routeParams) {
        var self = this;
        self.orderProp = 'title';
        
        $http.get('http://localhost:8080/api/v1/movies/' + $routeParams.movieId).then(function(response) {
          self.movie = response.data;
        });
      }
    ]
  });