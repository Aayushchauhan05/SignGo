const User =require ("../Entities/user.entities")

module.exports= class userDao {
    model=User
    async createUser(data){
return this.model.create(data)
    }
    async findUser(email){
return this.model.findOne({email:email})
    }
}