const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");   

router.post('/register' , [
    body("emailId").isEmail().withMessage("Please enter a valid email address"),
    body("fullname.firstName")
        .isLength({ min: 2 })
        .withMessage("First name must be at least 2 characters long"),
    body("fullname.lastName")
        .isLength({ min: 2 })
        .withMessage("Last name must be at least 2 characters long"),
    body("password")
        .isLength({ min: 3 })
        .withMessage("Password must be at least 3 characters long"),
    body("vehicle.color")
        .isLength({ min: 3 })
        .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate")
        .isLength({ min: 3 })
        .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
        .isInt({min:1})
        .withMessage("Capacity must be a number and at least 1"),
    body("vehicle.vehicleType")
        .isIn(['car', 'motorcycle', 'auto'])
        .withMessage("Vehicle type must be one of the following: car, motorcycle, auto")
] , captainController.registerCaptain);

module.exports = router;
