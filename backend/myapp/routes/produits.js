var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
var Produit = require('../models/produit');
var Commande = require('../models/commande');
var Categorie = require('../models/categorie');
var SousCategorie = require('../models/souscategorie');
var Marque = require('../models/marque');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

// ajouter produit
app.post('/add_produit', function (req, res) {
  var produit = new Produit({
    nomProduit : req.body.nomProduit,
    prixProduit : req.body.prixProduit,
    remiseProduit : req.body.remiseProduit ,
    imageProduit : req.body.imageProduit ,
    categorie : req.body.categorie ,
    sousCategorie : req.body.sousCategorie,
    marque : req.body.marque , 
    venteFlash : req.body.venteFlash
  });
  produit.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": produit });
  });
});

// ajouter categorie
app.post('/add_categorie', function (req, res) {
  var categorie = new Categorie({
    categorie : req.body.categorie
  });
  categorie.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": categorie });
  });
});


// ajouter sous categorie
app.post('/add_sous_categorie', function (req, res) {
  var souscategorie = new SousCategorie({
    categorie : req.body.categorie,
    souscategorie : req.body.souscategorie,
    imagesouscategorie : req.body.imagesouscategorie,
  });
  souscategorie.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": souscategorie });
  });
});

// ajouter marque
app.post('/add_marque', function (req, res) {
  var marque = new Marque({
    marque : req.body.marque,
    imagemarque : req.body.imagemarque,
  });
  marque.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": marque });
  });
});

// ajouter commande
app.post('/add_commande', function (req, res) {
  var nomUser = req.body.nomUser;
  var prenomUser = req.body.prenomUser;
  var emailClient =req.body.emailClient;
  var adresseClient =req.body.adresseClient;
  var telephoneClient=req.body.telephoneClient;
  var prixCommande= req.body.prixCommande;
  var produits = req.body.Produits;
  var typePaiement = req.body.typePaiement;


  var commande = new Commande({
    nomClient : nomUser,
    prenomUser : prenomUser,
    emailClient : emailClient ,
    adresseClient : adresseClient ,
    telephoneClient : telephoneClient ,
    prixCommande : prixCommande ,
    produits : produits ,
    typePaiement : typePaiement
  });
  console.log(commande)
  commande.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": commande });
  });
});





// read produit
app.get('/get_produit', function (req, res) {
  Produit.find((err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})

// read categorie
app.get('/get_categorie', function (req, res) {
  Categorie.find((err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})



// read sous categorie
app.get('/get_sous_categorie', function (req, res) {
  SousCategorie.find((err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})

// read user
app.get('/get_marque', function (req, res) {
  Marque.find((err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})

// read produit by categorie
app.get('/get_produit_bycat/:cat', function (req, res) {
  console.log(req.params.cat)
  Produit.find({categorie :req.params.cat},(err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})


// read produit by categorie
app.get('/get_produit_byid/:id', function (req, res) {
  console.log(req.params.id)
  Produit.find({_id :req.params.id},(err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})
app.get('/get_produit_bysouscat/:scat', function (req, res) {
  console.log(req.params.scat)
  SousCategorie.find({ souscategorie : req.params.scat},(err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})
app.get('/get_souscat_bycat/:cat', function (req, res) {
  console.log(req.params.cat)
  SousCategorie.find({categorie : req.params.cat},(err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})
app.get('/get_produit_byID/:id', function (req, res) {
  console.log(req.params.id)
  Produit.find({_id : req.params.id},(err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})


// read commande by tel

app.get('/get_commande_by_tel/:tel', function (req, res) {
  console.log(req.params.tel)
  Commande.find({telephoneClient : req.params.tel},(err, result) => {
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
