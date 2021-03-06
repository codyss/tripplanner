var mongoose = require('mongoose');
var PlaceSchema = require('./place.js').schema;

var RestuarantSchema = new mongoose.Schema({
  name: String,
  place: [PlaceSchema],
  price: {type:Number, min:1, max: 5},
  cuisines: [String] 
});



module.exports = mongoose.model('Restuarant', RestuarantSchema)