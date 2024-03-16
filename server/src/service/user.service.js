const { postDataDb, authUserDB } = require("../repository/user.repository");

async function postData(name, surname, email, password) {
  const data = postDataDb(name, surname, email, password);
  return data;
}

async function authUser(email, password) {
  const data = await authUserDB(email, password);
  if (!data.length) throw new Error("The user is not registered");
  return data;
}

module.exports = { postData, authUser };
