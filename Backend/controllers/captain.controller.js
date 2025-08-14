const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
module.exports.registerCaptain = async (req, res , next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, emailId, password, vehicle } = req.body;
  const isCaptainAlreadyExist = await captainModel.findOne({ emailId });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exists with this email" });
  }
  const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      emailId,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      //status: "inactive",
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};
