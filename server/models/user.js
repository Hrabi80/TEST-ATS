var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    firstname:{
        type:String,
        default: ''
    },
    lastname:{
        type:String,
        default:''
    },
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);