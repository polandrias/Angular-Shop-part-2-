(function(){

	"use strict";

	var cartService = function($http, $rootScope, $location){

		var addProductToCart = function(product, quantity){
			if($rootScope.cartProducts[product._id]){
				console.log("exists");
			}
			$rootScope.cartProducts[product._id] = { // uses product.name as an ID for the object
				product: product,
				quantity: quantity,
				total: product.price * quantity
			}
		}

		var removeProductFromCart = function(product){
			delete $rootScope.cartProducts[product.product._id]; // function to delete object from collection
		}

		var updateQuantity = function(item, quantity){
			$rootScope.cartProducts[item.product._id].quantity = quantity;
			console.log('Qty set to: ' + quantity);
		}

		var saveOrder = function(customer, products){

			$http.post("api/orders", {
					'customerName': customer.name,
					'customerAddress': customer.address,
					'customerZIP': customer.zip,
					'customerCity': customer.city,
					'customerPhone': customer.phone,
					'customerEmail': customer.email,
					'newsletter': customer.newsletter,
					'orderLines': new Array(products)
				})
				.success(function(){
					console.log('From Angular: Data sent to Express');
					$location.path('/checkout/basket/completed');
			});

		}

		return {
			addProductToCart: addProductToCart,
			removeProductFromCart: removeProductFromCart,
			updateQuantity: updateQuantity,
			saveOrder: saveOrder
		}

	}

	angular
		.module("Main")
		.factory("cartService", cartService);

}());