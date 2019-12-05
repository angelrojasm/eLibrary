const book = require('../book/bookModel')
const mongoose = require('../utils/mongoose')

//Repo class with all methods related to book database manipulation

class bookController {

//returns single book by ID
    static findById(newBook,callback) {
        

            book.findById(newBook._id, (err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                    
                }

            })

    }

//returns as many books as fit the query
    static find(query,callback) {
        
        
            book.find(query, (err,res) => {
                if(err) {
                callback(err, null)
            }
            else {
                callback(null,res)
            }
        })
    }

//saves a new book to db
    static addBook(newbook,callback) {

            newbook.save((err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                }
            })
        
    }
//deletes as many books from db as fit the query
    static delete(query,callback) {
       
            book.deleteMany(query, (err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                }
            })
                  
    }

//updates specific property of the book.
    static update(query,action,callback) {
            book.updateMany(query,action,(err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                }
            })
    }
}
    
module.exports = bookController