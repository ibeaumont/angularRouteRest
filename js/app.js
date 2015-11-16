var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'ngResource',
  'amigosControllers'  
]);

amigoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/amigos', {
        templateUrl: 'amigos.html',
        controller: 'amigosCtrl'
      }).
      when('/amigo/:id', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoEditCtrl'
      }).
      otherwise({
        redirectTo: '/amigos'
      });
  }]);    

   amigoApp.factory('amigosFact', function($resource){
   var resource1= $resource('http://midenda-igor.herokuapp.com/productos:id', { id: '@_id' }, {
    update: {method: 'PUT'}
    });
   var resource2= $resource('http://midenda-igor.herokuapp.com/producto:id', { id: '@_id' }, {
    update: {method: 'PUT'}
    });
   return {
      get: function(){
          return resource1.query();
          },
      find: function(id){
          return resource2.get({'id': id});
      }
    };
});  
  
