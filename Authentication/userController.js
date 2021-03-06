const user = require('../user/userModel');


//Repo class for all methods manipulating the user database
class userController{

//returns single user based on id

    static findById(newUser,callback) {
        

            user.findById(newUser._id, (err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                    
                }

            })

    }

//Verifies user credentials with database and returns validates previous registration

    static login(query,callback) {
        
        
            user.findOne(query, (err,res) => {
                if(err) {
                callback(err, null)
            }
            else {
                callback(null,res)
            }
        })
    }
//Verifies user credentials with database and adds the new user to the db if there is no match
    static register(newUser,callback) {

        userController.login({"email": newUser.email}, (err,res) => {
            if(err) {
                callback(err,null)
            }
            if(res != null) {
                callback(null, "That email is already registered in the database.")
            }
            else {
               const usertoadd = new user(newUser)
               if(usertoadd.email == 'Admin@gmail.com') {
                  usertoadd.Rank = 'Admin'
               }
                usertoadd.save((err,res) => {
                    if(err) {
                        callback(err,null)
                    }
                    else {
                        callback(null,res)
                    }
                })
            }
        })
        
    }
//deletes as many users from db as fit the query
    static delete(query,callback) {
       
            user.deleteMany(query, (err,res) => {
                if(err) {
                    callback(err,null)
                }
                else {
                    callback(null,res)
                }
            })
                  
    }
//updates specific property
static update(query,callback) {
    user.updateMany(query,{name: 'javier',updatedAt: new Date()}, (err,res) => {
        if(err) {
        callback(err,null)
        }
        else {
        callback(null,res)
        }
    })
}

}


module.exports = userController