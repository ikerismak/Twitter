class User{

    constructor(id,name,userName,bio){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio  = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getUserName(){
        return this.userName
    }

    get getBio(){
        return this.bio
    }

    get getDataCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }


    set setUserName(newUserName){
        this.userName = newUserName
    }


    set setBio(newBio){
        this.bio = newBio
    }
}


module.exports = User