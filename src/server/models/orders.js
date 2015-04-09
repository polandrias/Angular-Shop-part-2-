var mongoose = require('mongoose');

var schema = {
	customerName: String,
	customerAddress: String,
	customerZIP: String,
	customerCity: String,
	customerPhone: String,
	customerEmail: String,
	newsletter: Boolean,
	orderLines: Array
}

var Orders = mongoose.model("Orders", schema);

module.exports = Orders;