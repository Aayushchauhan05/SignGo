const { alreadyExist, created, serverError, notFound, unAuthorised, success } = require( "../constant/status.constant.js");
const TeacherService = require("../Services/teacher.service")

module.exports=  class TeacherController{
    constructor() {
        this.teacherservice = new TeacherService(); 
    }
    createUserTeacher= async (req,res)=>{
        try {
            console.log("Controller->teacher.controller->createUserTeacher")
            const data= await this.teacherservice.createTeacherService(req.body)
            return res.status(created).send(data)
        } catch (error) {
            console.log(error,"error in create teacher")
            if (error.message==="User Already Exist") {
                res.status(alreadyExist).send({message:"User already exist"})
            }
            else{
                res.status(serverError).send({message:"Internal server error"})
            }
        }
    }
    loginTeacher= async (req,res)=>{
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