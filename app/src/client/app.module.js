(function(){

	"use strict"; // for error messages - undeclared variables and more

	angular
		.module("Main", [
			"ngRoute",
			"Main.products", 
			"Main.product",
			"Main.cart",
			"Main.admin"
			]
		)
		.config(function($routeProvider){
			$routeProvider
				.when('/product/:id', {
					templateUrl: './products/product.html',
					controller: 'productController'
				})
				.when('/', {
					templateUrl: './products/products.html',
					controller: 'productsController'
				})
				.when('/checkout/basket', {
					templateUrl: './cart/checkout.html',
					controller: 'cartController'
				})
				.when('/checkout/basket/completed', {
					templateUrl: './cart/checkoutCompleted.html',
					controller: 'cartController'
				})
				.when('/admin', {
					templateUrl: './admin/index.html',
					controller: 'adminController'
				})
				.when('/admin/products', {
					templateUrl: './admin/products.html',
					controller: 'adminController'
				})
				.when('/admin/products/:id', {
					templateUrl: './admin/showProduct.html',
					controller: 'adminController'
				})
				.when('/admin/products/newProduct', {
					templateUrl: './admin/showProduct.html',
					controller: 'adminController'
				})
				.when('/admin/orders', {
					templateUrl: './admin/orders.html',
					controller: 'adminController'
				})
				.when('/admin/orders/:id', {
					templateUrl: './admin/showOrder.html',
					controller: 'adminController'
				})
				.when('/jade', {
					templateUrl: './views/index.jade',
					controller: 'adminController'
				})
				.otherwise({
					redirectTo: '/'
				});
		})
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		});
		

})();