const TeacherDao = require("../Dao/teacher.dao")
const bcrypt= require("bcrypt")
module.exports= class TeacherService{
    teacherdao= new TeacherDao
    async createTeacherService(userData){
        console.log("Services->teacher.service->createTeacherService");
        const userExist= await this.teacherdao.findTeacherByEmail(userData.emal)
        if (userExist) {
            throw new Error("User Already Exist");
            
        }
        const bcryptSalt= 8
        const hashPassword= await bcrypt.hash(userData.password,bcryptSalt);
        const data= await this.teacherdao.createTeacher({...userData,password:hashPassword})
        return data
    }
}