const pool = require("../db");

async function postDataDb(name, surname, email, password) {
  const client = await pool.connect();
  const sql =
    "insert into users(name, surname, email, password) values ($1,$2,$3,$4) returning *";
  const data = (await client.query(sql, [name, surname, email, password])).rows;
  return data;
}

async function authUserDB(email, password) {
  const client = await pool.connect();
  const sql = "select * from users where email=$1 and password =$2";
  const data = (await client.query(sql, [email, password])).rows;
  return data;
}

module.exports = { postDataDb, authUserDB };
