(function(){

	"use strict";

	var adminService = function($http, $location, $rootScope){

		var saveProduct = function(id, product){

			$http.put("api/product/"+id, {
					'name': product.name,
					'price': product.price,
					'description': product.description,
					'image': product.image,
					'category': product.category
				})
				.success(function(){
					console.log('From Angular: Product updated');
			});

		}

		var createProduct = function(product){

			$http.post("api/product", {
					'name': product.name,
					'price': product.price,
					'description': product.description,
					'image': product.image,
					'category': product.category
				})
				.success(function(){
					console.log('From Angular: Product created');
					$location.path('/admin/products');
				});

		}

		var deleteProduct = function(id){

			$http.delete("api/product/"+id)
				.success(function(){
					console.log('From Angular: Product deleted');
					$location.path('/admin/products');
				});

		}

		var getOrders = function(){
			return $http.get("api/orders")
						.then(function(response){
							return response.data;
						}) // actually returns a promise
		}

		var getOrder = function(id){
			return $http.get("api/orders")
						.then(function(response){
							return findOrderInArray(response.data, id);
						})
		}

		var findOrderInArray = function(data, id){
			return data.filter(function(element){
				if(element._id === id){
					return element;
				}
			});
		}

		return {
			saveProduct: saveProduct,
			createProduct: createProduct,
			deleteProduct: deleteProduct,
			getOrders: getOrders,
			getOrder: getOrder
		}

	}

	angular
		.module("Main")
		.factory("adminService", adminService);

}());