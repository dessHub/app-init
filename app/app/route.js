var express = require("express");
var app = express();

//Grap User model
var User = require('./app/model/user.js');
module.exports = function(app){

//Server routes ========
app.get('users', function(req,res){
  User.find(function(err, users){
     if (err)
        res.send(err);
     res.json(users);
  });
 });


//frontend routes =======
//route to handle all angulerrequest
app.get('*', function(req, res){
   res.sendFile('./public/views/index.html');
});

}