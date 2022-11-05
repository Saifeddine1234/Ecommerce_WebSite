var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    nomClient:String,
    prenomClient:String,
    emailClient:String,
    adresseClient:String,
    telephoneClient:String,
    prixCommande : String ,
    produits : Array ,
    typePaiement : String 
} );

dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
    }
    next();

} );

module.exports = mongoose.model('commande', dataSchema);
