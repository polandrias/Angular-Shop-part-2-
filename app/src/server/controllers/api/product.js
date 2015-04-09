var Products = require('../../models/products');
// Wrap all the methods in an object

var product = {
  read: function(req, res, next){

    res.json({type: "Read", id: req.params.id});

  },
  create: function(req, res, next){

    new Products(req.body).save(function (e) {
      res.send('item saved');
    });

  },
  update: function(req, res, next){

    var id = req.params.id;
    Products.findByIdAndUpdate(id, { $set: req.body }, function(err, product){
      if (err) console.log(err);
      res.send(product);
    });

    //res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){

    // res.json({type: "Delete", id: req.params.id});

    // var ID = req.params.id;
    // Products.find({ id: ID })

    Products.remove({ _id: req.params.id }, function(err) {
      if (err) console.log(err);
      res.send('item removed');
    });

  },
  getAll: function(req, res, next){

    Products.find(function(err, data){
      if(err) console.error;
      //console.log(res);
      res.json(data);
    });
  } 
  
}

// Return the object
module.exports = product;