const Cart = require('../models/cart.js');

exports.addCart = (req,res) => {
    // Cart.create(req.body, (err, data) => {
    //     if(err) throw err;
    //     res.send(data);
    // })
    let uid  = req.body.id;
    let prods = req.body.product;
    // console.log(uid);
    // console.log(prods);
    // Cart.find({userid : uid}, (err, data) => {
    //     if(err) throw err;
    //     if(data.length == 0) {
    //         // Create a new entry if the now userid found
    //         Cart.create({},{userid : uid, products : prods}, (err2, data) => {
    //             if(err2) throw err2;
    //             res.send(data);
    //         })
    //     } else {
    //         // If User is found, add to existing list of items for the user
    //         //res.json(data);
    //         Cart.update({userid : uid},{ $push : { products : prods }}, (err3, data) =>{
    //             if(err3) throw err3;
    //             res.send(data);
    //         })
    //     }
    // })
    Cart.create({userid : uid, products : prods}, (err2, data) => {
        if(err2) throw err2;
        res.send(data);
    })
}