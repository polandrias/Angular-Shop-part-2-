// Initialize the express framework
var express 	 	= require('express'),
	path			= require('path'),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
	username		= 'polandrias',
	password		= 'DoNotEnter01',
	databaseserver	= 'ds039281.mongolab.com:39281',
	databasename	= 'angular_shop',
	routes 			= require('./routes');



	mongodb://<dbuser>:<dbpassword>@ds039281.mongolab.com:39281/angular_shop

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client'))); // where are the html files (client-side) located

// path to jade views
app.set('views', __dirname + '/views');
// template engine
app.set('view engine', 'jade');

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

// backend
// router.route('/admin', function(res, req){
// 	res.render('index.jade');
// });

app.get('/admin', routes.index);
app.get('/admin/products', routes.products);

// Register the routing
app.use('/', router);

// mongoLab connection-string
mongoose.connect('mongodb://' + username + ':' + password + '@' + databaseserver + '/' + databasename);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);


// Start up the server
function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
}
