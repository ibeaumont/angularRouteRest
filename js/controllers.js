var amigosControllers = angular.module('amigosControllers', []);

amigosControllers.controller('amigosCtrl', ['$scope','amigosFact' ,
  function($scope,amigosFact) {
    $scope.amigos = amigosFact.get();
     /*$scope.delete=function(ind){
    	amigosFact.destroy(ind);
    }*/

  }]);
amigosControllers.controller('amigoEditCtrl', ['$scope','$routeParams', 'amigosFact',
  function($scope,$routeParams,amigosFact) {
    $scope.amigo=amigosFact.find($routeParams.id);
    $scope.btnUpdate=function(){
      amigosFact.save($routeParams.id,$scope.amigo);

    }
    //console.log($scope.amigo);
  }]);