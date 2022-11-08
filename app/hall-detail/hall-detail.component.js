angular.
  module('hallDetail').
  component('hallDetail', {
    templateUrl: 'hall-detail/hall-detail.template.html',
    controller: ['$http', '$routeParams',
      function HallDetailController($http, $routeParams) {
        var self = this;
        self.orderProp = 'name';
        
        $http.get('http://localhost:8080/api/v1/halls/' + $routeParams.hallId).then(function(response) {
          self.hall = response.data;
        });
      }
    ]
  });