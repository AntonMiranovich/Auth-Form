const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const secret = process.env.JWT_SECRET;
  const dataStored = user;

  const token = jwt.sign(dataStored, secret);
  return token;
};

module.exports = createToken;
