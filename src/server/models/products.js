var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	description: String,
	image: String,
	category: String
}

var Products = mongoose.model("Products", schema);

module.exports = Products;