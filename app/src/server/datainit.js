var mongoose = require('mongoose'),
	dbname = "angular_shop";

var Product = mongoose.model("Product", {
		name: String,
		price: Number,
		description: String,
		image: String,
		category: String
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
}

function insertProducts(){

	// insert multiple items to mongo
	Product.create(
		{
			name: "MacBook Pro Retina 15",
			price: 14990,
			description: "Quality computer for creative work.",
			image: "macbook.jpg",
			category: "Computers"
		},
		{
			name: "MacBook Air 13",
			price: "10990",
			description: "Small but powerful computer.",
			image: "macbook.jpg",
			category: "Computers"
		},
		{
			name: "iPad Air 2 (32GB)",
			price: "4990",
			description: "The whole internet in your palm.",
			image: "ipad.jpg",
			category: "Tablets"
		}
	, function(err, data){
		if(err){ 
			console.log(err);
		}
	});

}