
const mongoose=require('mongoose')

const {Schema}=mongoose
const Note=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Information',
        
    },

title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true,
    unique:false

},
tag:{
    type:String,
    default:true,

},
date: { type: Date,
     default: Date.now }



})
module.exports=mongoose.model('Note',Note)