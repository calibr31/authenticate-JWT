const { Schema, model} = require("mongoose");

const userschema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String,unique: true},
    age:{required:true,type:Number},
    password:{required:true,type:String,},
    refresh_token:{type:String}
},{timestamps:true})

const userModel = model("User",userschema,)

module.exports = {
    userModel
}