const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Products = require('./model/products');

_EXTERNAL_URL = 'https://tech.dev.ats-digital.com/api/products?size=100';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
        let data ='';
        let prods=[];
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
        setTimeout(() => {
        let products =JSON.parse(data);
        console.log("products",products);
        prods.push(products.products);
        Products.find({})
        .then((prods)=>{
         //   console.log("prods ???",prods);
            if(prods.length < 10){
                 Products.create({prods}).then((res)=>{
                     console.log('Updating the database',result)
           })
            }
        },(err)=>console.log("eerror",err))
        .catch((err)=>console.log("eerror",err));
        });
        }, 2000);
        

       console.log("chunk",typeof dd);        
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
    //   return callback(data);
      // console.log("data",data);
       
        // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;