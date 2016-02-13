var Sandbox = angular.module('Sandbox', ['ngMaterial']);

Sandbox.controller('MainCtrl', function($scope){
	$scope.title = "Grocery List";
	$scope.items = [ 
		{name:"Curry", price:2.99},
		{name:"Ground Beef", price:5.49},
		{name:"Green Onion", price:1.99},
		{name:"Milk", price:3.99},
		{name:"Carrots", price:0.99}
	];

	$scope.AddItem = function(){
		$scope.items.push($scope.itemToAdd);
		$scope.itemToAdd = "";
	};

	$scope.RemoveItem = function(item){
		var position = $scope.items.indexOf(item);
		$scope.items.splice(position, 1);

		$scope.remaining = ($scope.remaining - item.price).toFixed(2);
	};

	$scope.budget = 25;
	$scope.remaining = $scope.budget;
});