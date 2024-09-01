const { created, alreadyExist, serverError } = require("../constant/status.constant")
const TeacherService = require("../Services/teacher.service")

module.exports=  class TeacherController{
    teacherservice= new TeacherService
    async createUserTeacher(req,res){
        try {
            console.log("Controller->teacher.controller->createUserTeacher")
            const data= await this.teacherservice.createTeacherService(req.body)
            return res.status(created).send(data)
        } catch (error) {
            if (error.message==="User Already Exist") {
                res.status(alreadyExist).send({message:"User already exist"})
            }
            else{
                res.status(serverError).send({message:"Internal server error"})
            }
        }
    }
}