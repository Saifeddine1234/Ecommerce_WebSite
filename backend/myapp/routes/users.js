var express = require('express');
var app = module.exports = express.Router();
var bodyParser = require('body-parser');
const secretKey ="sdqf5ds5dd#ddfdf@fdfvgdçàdçàsddsdds";
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const detail = require("../detail.json");
const JWT_SECRET = "some super secret ...";
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
  var bloque = "1";
  
  var user = new User({
    nomUser : nomUser,
    prenomUser : prenomUser,
    emailUser : emailUser ,
    adresseUser : adresseUser ,
    telephoneUser : telephoneUser ,
    mdpUser : mdpUser,
    bloque : bloque,
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

  //bloque user
  app.post('/bloque', function (req, res) {
    var user = new User({
      _id : req.body.id,
      bloque : "0",
    });
    console.log(user);
    console.log(req.body.id);
    User.updateOne({_id: req.body.id} , user).then(
() => {
  res.status(201).json({
    message: 'update OK'
  });
}
    ).catch(
      (error) => {
        res.status(400).json({
        error : error
        });
      }
    )
  });
    //debloque user
    app.post('/debloque', function (req, res) {
      var user = new User({
        _id : req.body.id,
        bloque : "1",
      });
      console.log(user);
      console.log(req.body.id);
      User.updateOne({_id: req.body.id} , user).then(
  () => {
    res.status(201).json({
      message: 'update OK'
    });
  }
      ).catch(
        (error) => {
          res.status(400).json({
          error : error
          });
        }
      )
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



//forgetPassword
app.post("/sendemail", (req, res) => {
  console.log("request came");
  let user = req.body;
  User.find((err, result) => {
    if (!err) {
      for(let i =0 ; i < result.length ; i++){
        console.log(result[i].emailUser)
        if(user.email ==result[i].emailUser){
          const secret = JWT_SECRET;
          const payload = {
            email : result[i].emailUser,
            id : result[i]._id
          }
          const token = jwt.sign(payload , secret,{expiresIn : '15m'});
          const link = `http://localhost:4200/ResetPassword/${result[i]._id}/${token}`
          console.log(link);
          sendMail(user, link, info => {
            console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
            res.send(info);
          });
        }else{
      console.log("l'email n'existe pas dans le BD");
        }
      }
    } else {
      console.log(err)
      console.log('err')
    }
  })
});

async function sendMail(user , link, callback) {
  console.log(link);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: detail.email,
      pass: detail.password
    }
  });

  let mailOptions = {
    from: 'saifeddinechaaben@gmail.com', // sender address
    to: 'jeedchaaben@gmail.com', // list of receivers
    subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h1>  ${link}</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
  
}

app.post("/resetpassword/:id/:token", (req, res) => {
  console.log("resettttttt");
  const { id , token} = req.params ; 
  const secret = JWT_SECRET;
  try {
const payload = jwt.verify(token , secret);
res.status(200).send({ "success": true, "msg": 'Successful created new test.', "result": payload });
}catch(error){
    res.send(error.message)
  }

});



module.exports = app;
