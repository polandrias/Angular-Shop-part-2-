(function(){

	"use strict";

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

	function cartController($scope, $rootScope, cartService){

		// Update quantity
		$scope.updateQuantity = function(product){
			var quantity = this.quantity;
			cartService.updateQuantity(product, quantity);
		}

		// remove from cart
		$scope.removeFromCart = function(product){
			cartService.removeProductFromCart(product);
		}
		
		// Place order
		$scope.placeOrder = function(){
			var products = $rootScope.cartProducts;
			var customer = this.form;
			
			cartService.saveOrder(customer, products);
		}
		
	}

}());