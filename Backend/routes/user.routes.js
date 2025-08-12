const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("emailId").isEmail().withMessage("Please enter a valid email address"),
    body("fullname.firstName")
      .isLength({ min: 2 })
      .withMessage("First name must be at least 2 characters long"),
    body("fullname.lastName")
      .isLength({ min: 2 })
      .withMessage("Last name must be at least 2 characters long"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("passowrd must be of 3 charater long"),
  ],
  userController.registerUser
);

router.post("/login", [
  body("emailId").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("passowrd must be of 3 charater long"),
] , userController.loginUser);


router.get("/profile" ,authMiddleware.authUser, userController.getUserProfile);

router.get("/logout" , authMiddleware.authUser , userController.logoutUser);

module.exports = router;
