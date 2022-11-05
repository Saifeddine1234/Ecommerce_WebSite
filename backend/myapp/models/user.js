var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    nomUser:String,
    prenomUser:String,
    emailUser:String,
    adresseUser:String,
    telephoneUser:String,
    mdpUser: String,
} );

dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
    }
    next();

} );

module.exports = mongoose.model('user', dataSchema);
