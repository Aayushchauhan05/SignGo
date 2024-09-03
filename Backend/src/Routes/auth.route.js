const express = require("express");
const userController = require("../Controller/user.controller");
const { CREATE_USER, LOGIN_USER } = require("../constant/user.constant");
const { CREATE_TEACHER, LOGIN_TEACHER } = require("../constant/teacher.constant");
const TeacherController = require("../Controller/teacher.controller");
const router = express.Router();

const usercontroller = new userController();
const teachercontroller = new TeacherController();

router.post(CREATE_USER, usercontroller.createUser);
router.post(CREATE_TEACHER, teachercontroller.createUserTeacher);

// Login routes
router.post(LOGIN_USER, usercontroller.loginUser);
router.post(LOGIN_TEACHER, teachercontroller.loginTeacher);

module.exports = router;
