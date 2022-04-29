class User{

    constructor(id,name,userName,bio){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio  = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
}


module.exports = User