// These functions will handle the queries to search and store data.

// Import the pgPool
var pool = require('./db.js');

var createAccount = async (body) => {
  var {password, username, email} = body;
  var queryString = `INSERT INTO
  users(username, password, email)
  VALUES ('${username}', '${password}', '${email}')`
  var results = await pool.query(queryString)
  return results
  pool.end()
};

module.exports.createAccount = createAccount;