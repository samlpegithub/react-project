const express=require('express')
let  User=require('../models/User')
const router=express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcrypt')
const middleware=require('../middleware/middleware')
const jwt=require("jsonwebtoken")
router.post('/create',[
body('name','Enter valid Name').isLength({min:3}),
body('email','Enter Valid Email Address').isEmail(),
body('password','Password Must atleaset 5 Characters').isLength({min:5}),

], async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({  success: false, errors: errors.array()});
        
        
    }
    
    const {name,email,password}=req.body;
let user=await User.findOne({email})
if (user) {
//   res.json(User.email)
return res.json("Email Alread  Exit Here")
}
const Salt= await bcrypt.genSalt(10)
const hash=await  bcrypt.hash(password,Salt)
user=await User.create({
    name:name,
    email:email,
    password:hash
})
const id={
    user:user.id
}

const Key="awaismalik"
 const  token=  jwt.sign(id,Key)
 let success=true
res.json({success,token})



})



router.post('/login',[
    body('email','Enter Email Name').isEmail(),
    
    body('password','Password Must atleaset 5 Characters').isLength({min:5}),
    
    ], async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({  success: false, errors: errors.array()});
            
            
        }
        
        const {email,password}=req.body;
    let user=await User.findOne({email})
    if (!user) {
    return res.json("Email Does Not Exit  here")
}

let comaprepassword=await bcrypt.compare(password,user.password)
if (!comaprepassword) {
    return res.json("Email Does Not Exit  here")

    
}
    const id={
        user:user.id
    }
    
    const Key="awaismalik"
     const  token=  jwt.sign(id,Key)
     let success=true
    res.json({success,token})
    
    
    
    })

    
    router.get('/getuser',middleware, async(req,res)=>{
           
// const id=req
let id=req.user
console.log(id)

           let user=await User.findOne({_id:id}).select('-password')
       
        
        res.json(user)
        
        
        
        })





module.exports=router