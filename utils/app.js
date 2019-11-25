/*
Main Express server application
Utilizes all routers and repo function to interact with requests from Postman
*/ 
const express = require('express') 
//initializes express server
const app = express()
//sets up localhost port for testing
const port = 3000

//Implements all router handlers in server
const userRouter = require('../user/userRouter')
const bookRouter = require('../book/bookRouter')

//Parses all incoming JSON data into objects
app.use(express.json())

app.use(userRouter)
app.use(bookRouter)



app.listen(port, () => {
    console.log('app is running on port ' + port)
})

module.exports = app