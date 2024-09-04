const { alreadyExist, created, serverError, notFound, unAuthorised, success } = require( "../constant/status.constant.js");
const UserService = require ("../Services/user.service")

module.exports=class userController {
    constructor() {
        this.userservice = new UserService(); 
    }
    createUser=  async  (req,res)=> {
        try {
            
            console.log("controller->user.controller->createUser");
            const data=  await this.userservice.createUserService(req.body);
            return res.status(created).send(data)
            
        } catch (error) {
            console.log(error,"error in createUser")
            if (error.message==="User Already Exist") {
                res.status(alreadyExist).send({message:"user already exist"})
            }
            else{
                res.status(serverError).send({message:"internal server error"})
            }
        }
        
    }
    loginUser=async (req,res)=>{
try {
    console.log("controller->teacher.controller->loginTeacher");
    const data= await this.userservice.userLoginService(req.body)
    return res.status(success).send(data)
} catch (error) {
    if (error.message==="User Not Found") {
       return res.status(notFound).send({message:"user not found"})
    }
    else if(error.message==="Wrong Password") {
        return res.status(unAuthorised).send({message:"Wrong Password"})
    }
    else{
        return  res.status(serverError).send({message:"Internal server error"})
    }
}
}
}