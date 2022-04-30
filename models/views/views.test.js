const UserView = require('./../../app/views/UserView.js')



describe('test for UserView', () =>{

    test('1. return an erro object when try to create a new user with a null payload',()=>{

        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });
    
    test("2. Return an error object when try to create a new user with a payload with invaid properties",()=>{

        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, las propiedades del payload necesitan tener un valor válido/)
    });

    test("2. Return an error object when try to create a new user with a payload with invaid properties",()=>{

        const payload = {username: "username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, las propiedades del payload necesitan tener un valor válido/)
    });


    test("create a user by a given valid payload",()=>{

        const payload = {id: 1, name: "name" , userName: 'username'}
        const result = UserView.createUser(payload)


        expect(result.id).toBe(1)
        expect(result.name).toBe("name")
        expect(result.userName).toBe("username")
       
        
       
    })




})



