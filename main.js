var app = angular.module("lang",[]);


app.controller('simpleController', function($scope, counterService){

	$scope.counter = 1;
	$scope.service =counterService;

	$scope.increase = function(){
		$scope.counter++;
	};
	$scope.increaseService = function(){
		console.log("services active");
		$scope.service.increase();
	};

});


