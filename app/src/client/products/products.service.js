(function(){

	"use strict";

	var productsService = function($http){

		var getProducts = function(){
			return $http.get("api/products")
						.then(function(response){
							return response.data;
						}) // actually returns a promise
		}


		var getProduct = function(id){
			return $http.get("api/products")
						.then(function(response){
							return findProductInArray(response.data, id);
						})
		}

		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element._id === id){
					return element;
				}
			});
		}


		var getCategories = function(){
			return $http.get("api/categories")
						.then(function(response){
							return response.data;
						})
		}

		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService);

}());