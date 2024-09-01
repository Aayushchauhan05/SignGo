const express= require("express")
const connectDb = require("./src/Db/db.connection")
const app= express()


connectDb().then(()=>{
    app.listen(5000,()=>{
        console.log("Server is connected")
    })
}).catch((error)=>{
console.log("internal server error due to connection failure",error)
})