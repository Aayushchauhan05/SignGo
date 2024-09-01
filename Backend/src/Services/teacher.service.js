const TeacherDao = require("../Dao/teacher.dao")
const bcrypt= require("bcrypt")
const jwt=require("jsonwebtoken")
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
    async TeacherLoginService(userData){
        console.log("services->user.service->userLoginService");
        const user= await this.teacherdao.findTeacherByEmail(userData.email);
    
        if (!user) {
            throw new Error("User Not Found");
            
        }
        const comparePass= await bcrypt.compare(userData.password,user.password)
        if (!comparePass) {
            throw new Error("Wrong Password");
        }
        const token= jwt.sign(user,"secretkey",{expiresIn:"6d"})
        return {...user,token}
        
     }
    
}