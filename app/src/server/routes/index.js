var product = require('../controllers/api/product');


exports.index = function(req, res){
	res.render('index', {
		title: "Backend"
	});
};

exports.products = function(req, res, next){



	//var products = product.getAll;

	//var products = product.getAll();
	//console.log('Request Type:', req.method);

	//console.log(products);
	res.json(products);
};

exports.partials = function(req, res){
	var name = req.params.name;
	res.render('partials/' + name);
};