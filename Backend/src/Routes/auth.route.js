const express= require("express");
const userController = require("../Controller/user.controller");
const { CREATE_USER } = require("../constant/user.constant");
const { CREATE_TEACHER } = require("../constant/teacher.constant");
const TeacherController = require("../Controller/teacher.controller");
const router= express.Router()

const usercontroller= new userController()
const teachercontroller= new TeacherController
router.post(CREATE_USER,usercontroller.createUser);
router.post(CREATE_TEACHER,teachercontroller.createUserTeacher)
module.exports=router