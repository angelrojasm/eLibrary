const bookController = require('../book/bookController')
const book = require('../book/bookModel')
const upload = require('../utils/filestorage/file-upload')
const aws = require('aws-sdk')
const config = require('../utils/filestorage/config')


//Router file to handle all requests about the book model

const express = require('express')

//Initializes Router
const router = express.Router()

//Creates a new book and subsequently updates the user list and the bookpacks list

router.post('/uploadfile', (req,res) => {
  upload.sign_s3(req,res)
})

router.get('/getfile/:name', (req,res) => {
    const book = req.params.name

aws.config.setPromisesDependency()
aws.config.update( {
    accessKeyId: config.accessKeyID,
    secretAccessKey: config.secretKey,
    region: config.region
})

let s3 = new aws.S3()


s3.getObject({
    Bucket: config.bucket,
    Key: book
}, (err,data) => {
if(err) {
    res.send('The book does not have a text file with the same name. Please upload one.')
}
else {
    res.send(data.Body)
}
})
})

   

router.delete('/deletefile', (req,res) => {

    aws.config.setPromisesDependency()
    aws.config.update( {
        accessKeyId: config.accessKeyID,
        secretAccessKey: config.secretKey,
        region: config.region
    })
    
    let s3 = new aws.S3()
    
    s3.deleteObject({
        Bucket: config.bucket,
        Key: req.body.name
    }, (err,data) => {
    if(err) {
        console.log(err)
    }
    else {
        res.send('Succesfully Deleted!')
    }
    })  
    })


router.post('/makebook', (req,res) => {

    const newBook = new book(req.body)
        bookController.addBook(newBook, (err,book) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(book)
        }
    })
})

//deletes an book and subsequently updates the user list and the bookpacks list

router.delete('/deletebook/:id', (req,res) => {
const query = req.params.id
    bookController.delete({_id: query}, (err, deleted) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(deleted)
        }
    })
})

router.get('/getbook', (req,res) => {
 
    const newBook = new book(req.body)
    bookController.findById(newBook, (err,book) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send(book)
        }
    })

})

    router.get('/getbooks',(req,res) =>{
    bookController.find((err,result) => {
    if(err) {
    res.send(err)
    }
    else { 
        res.send(result)}
    })
})

router.get('/findbooks/:id',(req,res) =>{
    const query = req.params.id
    bookController.find2(query,(err,result) => {
    if(err) {
    res.send(err)
    }
    else { 
        res.send(result)}
    })
})

router.patch('/updatebook', (req,res) => {

    const query = req.body.Query
    const action = req.body.Action
    bookController.update(query,action,(err,updated) => {
        if(err) {
        res.send(err)
        }
        else {
            res.send(updated)
        }
    })
})


module.exports = router