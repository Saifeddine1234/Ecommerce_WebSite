var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
var Pub = require('../models/pub');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

// ajouter pub haut
app.post('/add_pubhaut', function (req, res) {
  var pub = new Pub({
    typePub : req.body.typePub,
    numPub : req.body.numPub,
    pubHaut : req.body.pubHaut
  });
  pub.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": pub });
  });
});

// ajouter pub principal
app.post('/add_pubprincipal', function (req, res) {
  var pub = new Pub({
    typePub : req.body.typePub,
    numPub : req.body.numPub,
    pubHaut : req.body.pubHaut
  });
  pub.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": pub });
  });
});
// ajouter pub droit
app.post('/add_pubdroit', function (req, res) {
  var pub = new Pub({
    typePub : req.body.typePub,
    numPub : req.body.numPub,
    pubHaut : req.body.pubHaut
  });
  pub.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": pub });
  });
});
// ajouter pub milieu
app.post('/add_pubmilieu', function (req, res) {
  var pub = new Pub({
    typePub : req.body.typePub,
    numPub : req.body.numPub,
    pubHaut : req.body.pubHaut
  });
  pub.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": pub });
  });
});

// ajouter pub bas
app.post('/add_pubbas', function (req, res) {
  var pub = new Pub({
    typePub : req.body.typePub,
    numPub : req.body.numPub,
    pubHaut : req.body.pubHaut
  });
  pub.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": pub });
  });
});


// read pub
app.get('/get_pub', function (req, res) {
  Pub.find((err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})


module.exports = app;
