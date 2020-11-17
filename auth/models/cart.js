const mongoose = require('mongoose'), 

Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    userid : { type : Schema.Types.ObjectId, ref : 'User' },
    products : [{ type : Schema.Types.ObjectId, ref : 'Product'}, Number]
});

module.exports = mongoose.model('Cart', ProductSchema);