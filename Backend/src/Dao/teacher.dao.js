const Teacher= require("../Entities/teacher.entities")

module.exports= class TeacherDao{
 model=Teacher
    async createTeacher(data){
await this.model.create(data)
    }
    async findTeacherByEmail(email){
await this.model.findOne(email)
    }
}