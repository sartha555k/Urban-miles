const captainModel = require("../models/captain.model");
module.exports.createCaptain = async (
  firstName,
  lastName,
  emailId,
  password,
  color,
  plate,
  capacity,
  vehicleType
) => {
  if (
    !firstName ||
    !lastName ||
    !emailId ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainModel.create({
    fullname: {
      firstName,
      lastName,
    },
    emailId,
    password: hashedPassword,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
