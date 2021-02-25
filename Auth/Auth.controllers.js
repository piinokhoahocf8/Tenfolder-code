const express  = require('express');
const jwt  = require('jsonwebtoken');
const app = require('../app');
const router = express.Router();


router.use(function(req,res,next){
    console.log(req.body)
    if( req.headers && req.headers.authorization)
    {
        var token = req.headers.authorization.split(' ')[1];

        console.log(token)
        jwt.verify(token,'longphi',(err ,decode) => {
            if(err){
                return res.status(403).json({message:"token invalid"})
            }else{
                return next();
            }
        })
    }else{
        return res.status(403).json({message:'Unauthorization'})
    }
})

module.exports = router



