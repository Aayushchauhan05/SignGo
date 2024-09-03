const Teacher= require("../Entities/teacher.entities")

module.exports= class TeacherDao{
 model= Teacher
    async createTeacher(data){
return await this.model.create(data)
    }
    async findTeacherByEmail(email){
return await this.model.findOne({email:email})
    }
}