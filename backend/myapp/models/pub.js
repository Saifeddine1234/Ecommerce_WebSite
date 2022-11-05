var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    typePub:String,
    numPub:String,
    pubHaut:String,
} );

dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
    }
    next();

} );

module.exports = mongoose.model('pub', dataSchema);
