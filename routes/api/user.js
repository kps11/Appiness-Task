const express = require('express')
const router =  express.Router()


const  validLoginInput = require('../../validation/login')

//@route  POST api/users/login
//@desc    login and authenticate the user
//@access  Public
router.post('/login', (req,res) => {
    const {error, isValid} = validLoginInput(req.body);
    //check validation
    if(!isValid){
        res.status(400).json(error)
    }
    const email = req.body.email
    const password  = req.body.password

    //Check the authenticate user
    if(email != 'hruday@gmail.com'){
        return res.status(401).json({msg:'User not found'})
    }else if(email === 'hruday@gmail.com' && password !== 'hruday123'){
        return res.status(401).json({msg:'Password is incorrect'})

    }else if(email === 'hruday@gmail.com' && password === 'hruday123'){
        return res.status(200).json({sucess:true})
    }


})
module.exports = router;