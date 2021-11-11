const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('./cors');

const Products = require('../models/product');

const productRouter = express.Router();
productRouter.use(bodyParser.json());


productRouter.route('/product')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next)=>{
  const size = parseInt(req.params.limit);
  const offset = parseInt(req.params.offset);
  const sort = {};
  Products.find({})
  .skip(offset)
      .limit(size)
      .sort(sort)
      .exec()
    .then((prods)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(prods);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

productRouter.route('/product/:product-id')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
  Products.findById(req.params.product-id)
    .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    }, (err) => next(err))
    .catch((err) => next(err));
})

 
  

  module.exports = productRouter;