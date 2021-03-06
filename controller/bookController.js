const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.Book
        .find(req.query)
        .sort({date:-1})
        .then(dbModel => {res.json(dbModel); console.log("route hit")})
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res){
        console.log(req.body)
        db.Book
        .create(req.body)
        .then(dbModel => {
            res.json(dbModel); 
            console.log("route hit")})
        .catch(err => {
            res.status(422).json(err); 
            console.log("Err",err)
        });
    },
    delete: function(req,res){
        db.Book
        .findById({_id:req.params.id})
        .then(dbModel =>dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}