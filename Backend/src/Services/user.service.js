const userDao= require ("../Dao/user.dao.js");
const bcrypt = require ("bcrypt")
module.exports=class UserService{
 userdao = new userDao
 async createUserService(userdata){
console.log("services->user.service->createUseService");
const userExist=  await this.userdao.findUser(userdata.email)
if (userExist) {
    throw new Error("User Already Exist");
    
}
const bcryptSalt=8;
const hashPassword= await bcrypt.hash(userdata.password,bcryptSalt)
const data= await this.userdao.createUser({...userdata,password:hashPassword})
return data;

 }

}