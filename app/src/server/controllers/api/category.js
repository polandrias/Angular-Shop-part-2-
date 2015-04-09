var Categories = require('../../models/categories');

var category = {

  getAll: function(req, res, next){

    Categories.find(function(err, data){
      if(err) console.error;
      res.json(data);
    });
  } 

}

// Return the object
module.exports = category;