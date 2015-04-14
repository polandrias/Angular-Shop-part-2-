// Initialize the express framework
var express 	 	= require('express'),
	path			= require('path'),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
	username		= 'polandrias',
	password		= 'DoNotEnter01',
	databaseserver	= 'ds039281.mongolab.com:39281',
	databasename	= 'angular_shop';


// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client'))); // where are the html files (client-side) located

// Routes set up
var router 	= express.Router();
var product = require('./controllers/api/product');
var category = require('./controllers/api/category');
var order = require('./controllers/api/order');

// Get all products
router.get('/api/products', product.getAll);

// Create a product
router.post('/api/product', product.create);

// Get one product, update one product, delete one product
router.route('/api/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);

// Save order API
router.post('/api/orders', order.create);

// Get orders API
router.get('/api/orders', order.getAll);

router.route('/api/order/:id')
	.get(order.read)
	.delete(order.delete);

// get categories API
router.get('/api/categories', category.getAll);

// Register the routing
app.use('/', router);

// mongoLab connection-string
mongoose.connect('mongodb://' + username + ':' + password + '@' + databaseserver + '/' + databasename);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);


var port = process.env.PORT || 3000;


// Start up the server
function startServer(){
	var server = app.listen(port, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
}
