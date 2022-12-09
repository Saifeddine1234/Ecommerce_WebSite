var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
var Produit = require('../models/produit');
var Commande = require('../models/commande');
var Categorie = require('../models/categorie');
var SousCategorie = require('../models/souscategorie');
var Marque = require('../models/marque');
var Assistance = require('../models/assistance');
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

// read produit from search
app.get('/sr/:search', function (req, res) {
  var regex = new RegExp( req.params.search);
  console.log("fff"+ regex)
  Produit.find({ nomProduit : regex },(err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    
  }})})
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

//update categorie
app.post('/update_categorie/:id/:cat', function (req, res) {

  var newcat = new Categorie({
    _id : req.params.id,
    categorie : req.body.categorie,
  });
  console.log(newcat);
  console.log(req.params.id);

  SousCategorie.updateMany({categorie: req.params.cat} ,{ categorie : req.body.categorie}).then(
    () => {
      Categorie.updateOne({_id: req.params.id} , newcat).then( () => {})
      Produit.updateMany({categorie: req.params.cat} ,{ categorie : req.body.categorie}).then( () => {})
    }
      )
 
});
//update sous categorie
app.post('/update_sous_categorie/:id/:soucat', function (req, res) {

  var newcat = new SousCategorie({
    _id : req.params.id,
    souscategorie : req.body.souscategorie,
  });
  console.log(newcat);
  console.log(req.params.id);
  console.log(req.params.soucat);


  SousCategorie.updateMany({souscategorie: req.params.soucat} ,{ souscategorie : req.body.souscategorie}).then(
    () => {
      Produit.updateMany({sousCategorie: req.params.soucat} ,{ sousCategorie : req.body.souscategorie}).then( () => {})
    }
      )
 
});
//update marque
app.post('/update_marque/:id/:marq', function (req, res) {
  console.log(req.params.id);
  console.log(req.params.marq);

  Marque.updateMany({marque: req.params.marq} ,{ marque : req.body.marque}).then(
    () => {
      Produit.updateMany({marque: req.params.marq} ,{ marque : req.body.marque}).then( () => {})
    }
      )
 
});

//update produit
app.post('/update_produit', function (req, res) {
  console.log(req.body); 
  if(req.body.nomProduit != ''){
    Produit.updateMany({_id: req.body._id} ,{ nomProduit : req.body.nomProduit}).then( () => {})
  }
  if(req.body.prixProduit != ''){
    Produit.updateMany({_id: req.body._id} ,{ prixProduit : req.body.prixProduit}).then( () => {})
  }
  if(req.body.remiseProduit != ''){
    Produit.updateMany({_id: req.body._id} ,{ remiseProduit : req.body.remiseProduit}).then( () => {})
  }
  if(req.body.sousCategorie != ''){
    Produit.updateMany({_id: req.body._id} ,{ sousCategorie : req.body.sousCategorie}).then( () => {})
  }
  if(req.body.categorie != ''){
    Produit.updateMany({_id: req.body._id} ,{ categorie : req.body.categorie}).then( () => {})
  }
  if(req.body.marque != ''){
    Produit.updateMany({_id: req.body._id} ,{ marque : req.body.marque}).then( () => {})
  }
  if(req.body.venteFlash != ''){
    Produit.updateMany({_id: req.body._id} ,{ venteFlash : req.body.venteFlash}).then( () => {})
  }
});
//reponse assistance
app.post('/update_msg/:id', function (req, res) {
  console.log(req.params.id);

  Assistance.updateOne({_id: req.params.id} , { ReponseAssistance : req.body.reponseAssistance}).then( () => {})

 
});
//delete sous categorie
app.delete('/delete_sous_categorie/:id/:souscat' , function (req, res){
  console.log(req.params.id)
  SousCategorie.deleteMany({souscategorie: req.params.souscat}).then(
    () => {
      Produit.deleteMany({sousCategorie: req.params.souscat}).then( () => {})
    }
      )
})
//delete sous categorie
app.delete('/delete_marque/:id/:marque' , function (req, res){
  console.log(req.params.id)
  Marque.deleteMany({marque: req.params.marque}).then(
    () => {
      Produit.deleteMany({marque: req.params.marque}).then( () => {})
    }
      )
})
//delete categorie

app.delete('/delete_categorie/:id/:cat' , function (req, res){
  console.log(req.params.id)
  Categorie.deleteOne({_id: req.params.id} ).then(
    () => {
      Produit.deleteMany({categorie: req.params.cat}).then( () => {})
      SousCategorie.deleteMany({categorie: req.params.cat}).then( () => {})

    }
      )
})
app.delete('/delete_produit/:id' , function (req, res){
  console.log(req.params.id)
  Produit.deleteOne({_id: req.params.id} ).then(
    () => {
    }
      )
})

module.exports = app;
