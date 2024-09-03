const userDao= require ("../Dao/user.dao.js");
const bcrypt = require ("bcrypt")
const jwt= require("jsonwebtoken")
module.exports=class UserService{
 userdao = new userDao
 async createUserService(userdata){
console.log("services->user.service->createUseService");
const userExist=  await this.userdao.findUser(userdata.email)
if (userExist) {
    throw new Error("User Already Exist");
    
}
const bcryptSalt=8;
console.log(bcryptSalt)
const hashPassword= await bcrypt.hash(userdata.password,bcryptSalt)
const data= await this.userdao.createUser({...userdata,password:hashPassword})
return data;

 }
 async userLoginService(userData){
    console.log("services->user.service->userLoginService");
    const user= await this.userdao.findUser(userData.email);

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