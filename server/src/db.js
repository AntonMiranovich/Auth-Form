const {Pool} = require('pg')

const pool = new Pool({
    password:"2436910",
    database: "auth_form",
    port:5432,
    host:"localhost",
    user:'postgres'
})

module.exports = pool