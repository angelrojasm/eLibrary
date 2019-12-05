/*Database Connection File
This Archive is passed on to every repo for database manipulation


*/


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://angelrojasm:IzPRD01u98llFBxU@elibrary-2nlud.mongodb.net/test?retryWrites=true&w=majority',
 {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true

 })

 