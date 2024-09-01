const { alreadyExist, created, serverError } = require( "../constant/status.constant.js");
const UserService = require ("../Services/user.service")

module.exports=class userController {
    userservice= new UserService
    async  createUser(req,res) {
        try {
            console.log("controller->user.controller->createUser");
            const data=  await this.userservice.createUserService(req.body);
            return res.status(create).send(data)
            
        } catch (error) {
            if (error.message==="User Already Exist") {
                res.status(alreadyExist).send({message:"user already exist"})
            }
            else{
                res.status(serverError).send({message:"internal server error"})
            }
        }
        
    }
}