const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken"); 
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized !!" });
  }

  const isBlacklisted = await blacklistTokenModel.findOne({token:token});
  if(isBlacklisted){
    return res.status(401).json({ message: "Token is blacklisted, please login again" });
  }



  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    return next();
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error !!" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.header.authorization?.split(" ")[1];
  if(!token){
    return res.status(401).json({ message: "Unauthorized !!" });
  }
  const blacklisted = await blacklistTokenModel.findOne({token:token})
  if(blacklisted){
    return res.status(401).json({ message: "Token is blacklisted, please login again" });
  } 
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    // if(!captain){
    //   return res.status(404).json({ message: "Captain not found" });
    // }
    req.captain = captain;
    return next();
  }catch(err){
    return res.status(500).json({ message: "Internal Server Error !!" });
  }
};
