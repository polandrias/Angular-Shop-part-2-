(function(){

	var dataService = function($http){



		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						})
		};


		// Array with products in cart
		var cartContents = [];

		// Add to cart service
		var addToCart = function(product){
			cartContents.push(product);
			console.log(cartContents);
		}

		// Get cart service
		var getCart = function(){
			return cartContents;
		}


		return {
			getProducts: getProducts,
			addToCart: addToCart,
			getCart: getCart
		}

	}

	angular
		.module("Main")
		.factory("dataService", dataService);

})();