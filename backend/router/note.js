const express=require('express')
const router=express.Router()
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');
const middleware = require('../middleware/middleware');


router.get('/fetchnote',
  middleware, async(req,res)=>{
      
        const id=req.user
    
 let note=await Note.find({user:id})   
    res.json({note})
    
    
    
    
    })


router.post('/addnote',[
body('title').isLength({min:3}),
body('description','Enter Description Atlaset 5 Characters').isLength({min:5})

],middleware, async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({  success: false, errors: errors.array()});
        
        
    }
    const id=req.user
    const {title,description,tag}=req.body;

let note=new Note({
    user:id,
 title:title,
description,description,
tag:tag
})
note.save()
res.json({note})




})

router.put(`/updatenote/:id`,middleware, async(req,res)=>{
       
      
    let note= await Note.findById({_id:req.params.id})
    

if(note.user.toString()!==req.user){
return res.status(401).json("Note Does Not Exit here")

}
const {title,description,tag}=req.body;
let newNote={};
if (title) {newNote.title=title}
if (description) {newNote.description=description}
if (tag) {newNote.tag=tag}

 newNote=await   Note.findByIdAndUpdate(note,newNote,{new:true})

res.json(newNote)

    

    })


    router.delete(`/deletenote/:id`,middleware, async(req,res)=>{
       
      
        let note= await Note.findById({_id:req.params.id})
        
    
    if(note.user.toString()!==req.user){
    return res.status(401).json("Note Does Not Exit here")
    
    }
    
    
     newNote=await   Note.findByIdAndDelete({_id:req.params.id})
    
    res.json("Note Successfuly Deleted..")
    
        
    
        })

module.exports=router