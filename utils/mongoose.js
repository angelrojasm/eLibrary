/*Database Connection File
This Archive is passed on to every repo for database manipulation


*/


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/eLibary-API',
 {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true

 })

 