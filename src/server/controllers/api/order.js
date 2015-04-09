var Orders = require('../../models/orders');

var order = {

  read: function(req, res, next){

    res.json({type: "Read", id: req.params.id});

  },
  
  create: function(req, res, next){

  	new Orders(req.body).save(function(e){
  		res.send('order saved');
  	});

  },

  delete: function(req, res, next){

    Orders.remove({ _id: req.params.id }, function(err) {
      if (err) console.log(err);
      res.send('item removed');
    });

  },

  getAll: function(req, res, next){

  	Orders.find(function(err, data){
      if(err) console.error;
      //console.log(res);
      res.json(data);
    });

  }

}

// Return the object
module.exports = order;