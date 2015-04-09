(function(){

	"use strict";

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService, cartService){

		// Sends products to view via Scope
		var modelProducts = function(data){
			$scope.products = data;
		}

		// Sends categories to view via Scope
		var modelCategories = function(data){
			$scope.categories = data;
		}

		// Add to cart method
		$scope.addToCart = function(product){
			var quantity = this.quantity;
			cartService.addProductToCart(product, quantity);
		}

		// remove from cart
		$scope.removeFromCart = function(product){
			cartService.removeProductFromCart(product);
		}


		// Filter by categories
		$scope.categoriesSelected = new Array();

		$scope.categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category); // -1 for not checked
			if(i > -1){
				$scope.categoriesSelected.splice(i, 1);
			}else{
				$scope.categoriesSelected.push(category);
			}			
		}

		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}


		// get data from service
		productsService.getCategories()
			.then(modelCategories);

		productsService.getProducts()
			.then(modelProducts); // use then, because we get a promise from the productsService.getProducts method

	}

}());