var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/users')
var bcrypt = require('bcrypt');

var uid2 = require('uid2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sign-up', async function(req, res, next) {
  const cost = 10;
  const hash = bcrypt.hashSync(req.body.password, cost);



  var searchUser = await UserModel.findOne({
    email: req.body.email
  })

  console.log(searchUser)
  
  if(!searchUser){
    var newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      token: uid2(32),

    })
  
    var newUserSave = await newUser.save()};
  

  res.json({result:newUserSave ? true : false, newUserSave });
 
 });



 router.post('/sign-in', async function(req,res,next){
 

  var searchUser = await UserModel.findOne({
    email: req.body.email
  })


  if (bcrypt.compareSync(req.body.password, searchUser.password)) {
    res.json({ login: true, searchUser });
   } else {
    res.json({ login: false });
   }
  
});

module.exports = router;