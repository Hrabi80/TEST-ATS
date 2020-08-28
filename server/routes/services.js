const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('./cors');
var authenticate = require('../authenticate');
const Services = require('../models/service');

const serviceRouter = express.Router();
serviceRouter.use(bodyParser.json());


serviceRouter.route('/service')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next)=>{
    Services.find({})
    .then((services)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(services);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

serviceRouter.route('/api/service')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.post(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Services.create(req.body)
    .then((serv)=>{
        console.log('a new service has been recorded',serv);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    res.statusCode = 403;
    res.end('Delete operation not supported on /api/service cuz it delete all');
});

serviceRouter.route('/api/service/:id_ser')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Services.findById(req.params.id_ser)
    .then((service)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(service);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on sercice/id');
})
.put(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Services.findByIdAndUpdate(req.params.id_ser,{$set: req.body},{new:true})
    .then((ser)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(ser);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Services.findByIdAndRemove(req.params.id_ser)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

serviceRouter.route('/service/:id_ser')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Services.findById(req.params.id_ser)
    .then((service)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(service);
    },(err)=>next(err))
    .catch((err)=>next(err))
})


module.exports = serviceRouter;