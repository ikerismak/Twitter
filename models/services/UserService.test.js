const UserService = require("./../../app/services/UserService.js")


describe("Test for UserService",() => {

    test("1. Create a new user using the UserService", () =>{

        const user = UserService.create(1, "iker", "ikertoscano")

        expect(user.userName).toBe("ikertoscano")
        
        expect(user.name).toBe("iker")
        
        expect(user.id).toBe(1)
        
        expect(user.bio).not.toBeUndefined()
        


    }) 

    test("2. get all user data in a list",()=>{

        const user = UserService.create(1,"ikertoscano","iker")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1)

        expect(userInfoList[1]).toBe('iker')

        expect(userInfoList[2]).toBe("ikertoscano")

        expect(userInfoList[3]).toBe("sin bio")
    })


    test("3. update username",()=>{

        const user = UserService.create(1,"ikertoscano","iker" )

        UserService.updateUserUsername(user, "carlog")

        expect(user.userName).toBe("carlog")
    })

    test("4. given a list of users give me the list of username",()=>{

        const user1 = UserService.create(1,"iker","ikertoscano1")
        const user2 = UserService.create(1,"iker","ikertoscano2")
        const user3 = UserService.create(1,"iker","ikertoscano3")

        const usernames = UserService.getallUsernames([user1,user2,user3])

        expect(usernames).toContain("ikertoscano1")
        expect(usernames).toContain("ikertoscano2")
        expect(usernames).toContain("ikertoscano3")
        
    })
})