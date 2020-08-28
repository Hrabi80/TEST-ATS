const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}
,{
    timestamps : true
});


var Services = mongoose.model('Service',serviceSchema);

module.exports = Services;