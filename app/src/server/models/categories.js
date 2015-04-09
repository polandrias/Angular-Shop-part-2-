var mongoose = require('mongoose');

var schema = {
	name: String
}

var Categories = mongoose.model("Categories", schema);

module.exports = Categories;