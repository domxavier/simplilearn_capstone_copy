module.exports = function (app) {
    var cart = require("../controllers/cart.controller.js");
    // Add Products to Cart
    app.post('/api/checkout', cart.addCart);
}