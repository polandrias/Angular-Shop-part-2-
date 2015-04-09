(function(){

	"use strict";

	angular
		.module("Main.admin", [])
		.controller("adminController", adminController);

	function adminController($scope, $rootScope, $routeParams, adminService, productsService){

		// Sends products to view via Scope
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		var modelOrders = function(data){
			$scope.orders = data;
		}

		var modelOrder = function(orderArray){
			$scope.order = orderArray[0];
			console.log(orderArray[0]);
		}

		// save product
		$scope.saveProduct = function(id){
			var product = this.product;
			
			// if product exists 'id' will not be 'undefined'
			if(id != undefined){
				// if editing an existing product
				adminService.saveProduct(id, product);
			}else{
				// if creating a new product
				adminService.createProduct(product);
			}
		}

		// delete product
		$scope.deleteProduct = function(id){
			adminService.deleteProduct(id);
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getProduct($routeParams.id)
			.then(modelProduct);

		adminService.getOrders()
			.then(modelOrders);

		adminService.getOrder($routeParams.id)
			.then(modelOrder);
		
	}

}());