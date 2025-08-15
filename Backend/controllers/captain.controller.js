const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, emailId, password, vehicle } = req.body;
  const isCaptainAlreadyExist = await captainModel.findOne({ emailId });
  if (isCaptainAlreadyExist) {
    return res
      .status(400)
      .json({ message: "Captain already exists with this email" });
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

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { emailId, password } = req.body;
  const captain = await captainModel.findOne({ emailId }).select("+password");
  if (!captain) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  // const captain = req.captain;
  // if(!captain) {
  //     return res.status(404).json({ message: "Captain not found" });
  // }
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized !!" });
  }
  await blacklistTokenModel.create({ token: token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
