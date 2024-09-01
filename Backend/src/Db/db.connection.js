const mongoose=require("mongoose")
const Uri="mongodb+srv://Aayush:aayush@test.0orf7.mongodb.net/?retryWrites=true&w=majority&appName=Test"
const connectDb=  async ()=>{
    try {
        await mongoose.connect(Uri)
        console.log("Database is connected");

    } catch (error) {
        console.log(error,"error in database connect")
    }
}
module.exports= connectDb