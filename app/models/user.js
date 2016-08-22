// Grap mongoose models
var mongoose = require('mongoose');

// Define our user model
module.exports = mongoose.model('User', {
    name : {String, default:''}
});
