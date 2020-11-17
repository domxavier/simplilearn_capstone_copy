const mongoose = require('mongoose'), 

Schema = mongoose.Schema;

const CartSchema = mongoose.Schema({
    userid : { type : Schema.Types.ObjectId, ref : 'User' },
    products : []
});

module.exports = mongoose.model('Cart', CartSchema);