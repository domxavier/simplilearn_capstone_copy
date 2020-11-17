const mongoose = require('mongoose'), 

Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    pcode : String,
    pname : String,
    pdetails : String,
    pimage : String,
    price : Number,
    pcompany : String
});

module.exports = mongoose.model('Product', ProductSchema);
