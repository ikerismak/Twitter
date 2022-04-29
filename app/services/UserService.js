const User = require("./../models/user.js")



class UserService{


    static create(id, userName, name){

        return new User(id,userName,name,"sin bio")
        
    }

    static getInfo(user){

        return [user.id, user.userName , user.name , user = "sin bio"]
    }

    static updateUserUsername(user, newUsername){

        return  user.userName = newUsername
    }


    // static getallUsernames(user){

    //     return 
    // }

}


module.exports = UserService