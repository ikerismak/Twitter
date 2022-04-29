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
    
});