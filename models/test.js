const User = require("./../../app/models/user")


describe('Unit test for user class',()=> {

    test("create an user object", ()=>{

        const user = new User(1, "iker","ikerismak","bio","dateCreated","lastUpdated")

        expect(user.id).toBe(1)
        expect(user.name).toBe("iker")
        expect(user.userName).toBe("ikerismak")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()                                                            
    });

    test("test getters", ()=>{

        const user = new User(1, "iker","ikerismak","bio")
    
        expect(user.getUserName).toBe("ikerismak")
        expect(user.getBio).toBe("bio")
        expect(user.getDataCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()                                         
    });


    test("test setters", ()=>{

        const user = new User(1, "iker","ikerismak","bio")
        user.setUserName = "ismak"
        expect(user.userName).toBe("ismak")

        user.setBio = "newBio"
        expect(user.bio).toBe("newBio")
                                                                
    
    });
 
});

