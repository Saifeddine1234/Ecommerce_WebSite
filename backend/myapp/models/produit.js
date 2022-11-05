var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    nomProduit:String,
    prixProduit:String,
    remiseProduit:String,
    imageProduit:String,
    categorie:String,
    sousCategorie:String,
    marque:String, 
    venteFlash : String
} );

dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
    }
    next();

} );

module.exports = mongoose.model('produit', dataSchema);
