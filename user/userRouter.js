const userController = require('../user/userController')
const user = require('../user/userModel')
const express = require('express')


const router = express.Router()

  

router.post('/register', (req,res) => {
    const newUser = new user(req.body)
        userController.register(newUser, (err,user) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(user)
        }
    })
})

router.post('/deleteusers', (req,res) => {
const query = req.body
userController.delete(query, (err, deleted) => {
    if(err) {
        res.send(err)
    }
    else {
        res.send(deleted)
    }
})
})


router.patch('/updateuser', (req,res) => {
    const query = req.body
    
    userController.update(query,(err,updated) => {
        if(err) {
        res.send(err)
        }
        else {
            res.send(updated)
        }
    })
})

router.get('/getuser', (req,res) => {

    const newUser = new user(req.body)
    userController.findById(newUser, (err,user) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(user)}
    })

})

router.get('/login',(req,res) =>{
    const query = req.body

    userController.login( query,(err,result) => {
    if(err) {
    res.send(err)
    }
    if((result.length == 0)) {
        res.send("User is not registered in database")
        
    }
    
    else { 
        res.send(result)
    }

    })
})



module.exports = router