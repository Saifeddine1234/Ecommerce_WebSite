var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
const secretKey ="sdqf5ds5dd#ddfdf@fdfvgdçàdçàsddsdds";
const jwt = require("jsonwebtoken");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));  
const verifyToken = require("../verifyToken")
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
var User = require('../models/user');
var Assistance = require('../models/assistance');


// ajouter user
app.post('/add_user', function (req, res) {
  var nomUser = req.body.nomUser;
  var prenomUser = req.body.prenomUser;
  var emailUser =req.body.emailUser;
  var adresseUser =req.body.adresseUser;
  var telephoneUser=req.body.telephoneUser;
  var mdpUser = req.body.mdpUser;
  
  var user = new User({
    nomUser : nomUser,
    prenomUser : prenomUser,
    emailUser : emailUser ,
    adresseUser : adresseUser ,
    telephoneUser : telephoneUser ,
    mdpUser : mdpUser
  });
  user.save(function (err) {
  if (err) {
     console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating test", "error": err });
  }
  res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": user });
  });
});
// ajouter assistance
app.post('/add_assistance', function (req, res) {
    var assistance = new Assistance({
        emailAssistance : req.body.emailAssistance,
        messageAssistance : req.body.messageAssistance,
        ReponseAssistance : "",

    });
    assistance.save(function (err) {
    if (err) {
       console.log("some error: ", err);
        return res.json({ "success": false, "msg": "Error while creating test", "error": err });
    }
    res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": assistance });
    });
  });

// read assistance
app.get('/get_assistance', function (req, res) {
  Assistance.find((err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})
// read assistance
app.get('/get_assistance_byEmail/:email', function (req, res) {
  Assistance.find({emailAssistance :req.params.email},(err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})

// read user
app.get('/get_user', function (req, res) {
  User.find((err, result) => {
    if (!err) {
      res.send(result)
      console.log(result)
    } else {
      console.log(err)
      console.log('err')
    }
  })
})
app.post('/login', async(req,res) => {
  const telephoneUser = req.body?.telephoneUser
  const mdpUser = req.body?.mdpUser
  console.log('details', telephoneUser, mdpUser);
  User.find({telephoneUser :telephoneUser },(err, result) => {
    console.log(result)
const existUser = result ;
var cc = existUser[0].telephoneUser ;
console.log("sssssssssssssssssssss" + cc)

console.log(existUser[0].telephoneUser);
console.log(telephoneUser);

      if(existUser[0].telephoneUser == telephoneUser) {
        console.log("telephoneeeee")
        console.log('details', telephoneUser, mdpUser);
              if(mdpUser === existUser[0].mdpUser) {
                console.log("mdppppppppp")
                 const auth = jwt.sign(
                     { user_id: existUser._id, telephoneUser },
                     'secretKey', {expiresIn : '1h'}
                   );
                   console.log(auth);
                   console.log(cc)
app.get('/adminP',verifyToken , function(req , res){
  console.log(req.decodedToken)
  if(req && req.decodedToken){
    res.json({status : 'ok' , data : cc })
  
  }else{
    res.json({status : 'no' , data :'no' })
  }
  })
                 res.json({status: 'ok',loginUser : true, data: auth , tel : existUser});
              } else {
                 res.json({status: 'no', loginUser : false, data: 'Please enter valid password'});
              }  
      } else {
          res.json({status: 'no2', loginUser : false, data: 'Please enter valid username'});

      }
      }, (error) => {
          res.json({status: 'error' , data : error})
      })
});

app.get('/get_by_telephone/:tel', function (req, res) {
  console.log(req.params.tel)
  User.find({telephoneUser : req.params.tel},(err, result) => {
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
