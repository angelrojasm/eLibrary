const express = require('express');
const router = express.Router();
const userController = require('../Authentication/userController');
const user = require('../user/userModel')


router.post('/authenticate',(req,res) =>{
    const query = req.body

    userController.login( {email: req.body.email},(err,result) => {
    if(err) {
    res.send(err)
    }
    if((result == null)) {
        res.send("User is not registered in database")
        
    }
    
    else { 
        if(result.password == req.body.password) {
        res.send(result)
        }
        else{res.send(' password Incorrect')}
    }

    })
})
router.post('/register', (req,res) => {
    const newUser = req.body
    userController.register(newUser, (err,user) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(user)
        }
    })
})
module.exports = router;