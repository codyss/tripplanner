var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/tripplanner');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var db = mongoose.connection;


module.exports = {
  Hotel: require('./hotel'),
  Restaurant: require('./restaurant'),
  Activity: require('./activity'),
  Place: require('./place')
}