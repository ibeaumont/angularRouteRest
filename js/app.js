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
   return {
      get: function(){
        var resource1= $resource('http://midenda-igor.herokuapp.com/productos:id', { id: '@_id' }, {
    update: {method: 'PUT'},
    params:{Id:''}, isArray:true
    });
   
          return resource1.query();
          },
      find: function(id){
        var resource2= $resource('http://midenda-igor.herokuapp.com/producto/:id',{id:'@id'}, {
          query: {method:'GET'}, 
          get: {method:'GET'}, 
          post: {method:'POST'},
          update: {method: 'PUT'}
          
    });
   
          return resource2.get({},{'_id': id});
      }
    };
});  
  
