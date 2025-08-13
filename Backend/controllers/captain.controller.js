const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, emailId, password, color, plate, capacity, vehicleType } = req.body;
    try{

    }catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}