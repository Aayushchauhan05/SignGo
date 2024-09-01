const express= require("express");
const userController = require("../Controller/user.controller");
const { CREATE_USER } = require("../constant/user.constant");
const router= express.Router()

const usercontroller= new userController()

router.post(CREATE_USER,usercontroller.createUser);

module.exports=router