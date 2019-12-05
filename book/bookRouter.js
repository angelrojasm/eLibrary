const bookController = require('../book/bookController')
const book = require('../book/bookModel')
const upload = require('../utils/filestorage/file-upload')
const singleUpload = upload.single('book')
const aws = require('aws-sdk')
const config = require('../utils/filestorage/config')

//Router file to handle all requests about the book model

const express = require('express')

//Initializes Router
const router = express.Router()

//Creates a new book and subsequently updates the user list and the bookpacks list

router.post('/upload', (req,res) => {
singleUpload(req,res, function(err) {
    return res.json({'imageUrl': req.file.location})
})
})

router.get('/getfile', (req,res) => {

aws.config.setPromisesDependency()
aws.config.update( {
    accessKeyId: config.accessKeyID,
    secretAccessKey: config.secretKey,
    region: config.region
})

let s3 = new aws.S3()

s3.getObject({
    Bucket: config.bucket,
    Key: 'libro.txt'
}, (err,data) => {
if(err) {
    console.log(err)
}
else {
    res.send(data.Body)
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

router.post('/deletebooks', (req,res) => {

const query = req.body.book
    bookController.delete(query, (err, deleted) => {
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
    const query = req.body
    bookController.find(query,(err,result) => {
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