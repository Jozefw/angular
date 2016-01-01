var app = angular.module("lang");

app.service('counterService', function(){



	this.counter = 1;

	this.increase =function(){
		this.counter++;
	};


});