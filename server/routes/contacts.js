const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Contacts = require('../models/contact');

const contactRouter = express.Router();
contactRouter.use(bodyParser.json());

contactRouter.route('/')
.get((req,res,next)=>{
    Contacts.find({})
    .then((contacts)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(contacts);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    Contacts.create(req.body)
    .then((cont)=>{
        console.log('a new message has been recorded',cont);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
    Contacts.remove({})
    .then((resp)=>{
        res.status.Code=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

contactRouter.route('/:id_mess')
.get((req,res,next)=>{
    Contacts.findById(req.params.id_mess)
    .then((cont)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(cont);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on contacts/id');
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /contacts/:id');
})
.delete((req,res,next)=>{
    Contacts.findByIdAndRemove(req.params.id_mess)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});


module.exports = contactRouter;