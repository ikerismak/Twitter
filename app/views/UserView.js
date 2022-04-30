
const  UserService = require("./../../app/services/UserService.js")


class UserView {


    static createUser(payload){

        if(payload === null){
            console.log("Error es null");
            return { error: "el payload no existe"}
        }

        else if(typeof payload.id === "number" &&  typeof payload.userName === "string" && typeof payload.name ==="string" ){
            console.log("se crea un objeto");
            return UserService.create(payload.id, payload.name ,payload.userName)
           

        }


        else{
            return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
          }

    } 

}


const payload = {id:1 , name: "iker",userName:"perro"}

const lo = UserView.createUser(payload)


console.log(lo);
module.exports = UserView