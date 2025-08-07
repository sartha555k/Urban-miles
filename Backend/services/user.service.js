const userModel = require("../models/user.model");


module.exports.createUser = async ({
  firstName,
  lastName,
  emailId,
  password,
}) => {
  if (!firstName || !emailId || !password) {
    throw new Error("All fields are required");
  }
  const user = await userModel.create({
    fullname: {
      firstName,
      lastName, 
    },
    emailId,
    password,
  });
  return user;
};
