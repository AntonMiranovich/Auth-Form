const { postDataDb } = require("../repository/user.repository");

async function postData(name, surname, email, password) {
  const data = postDataDb(name, surname, email, password);
  return data;
}

module.exports = { postData };
