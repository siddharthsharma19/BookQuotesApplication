var jwt = require("jwt-simple");
var config = require("../config/dbconfig");

const getUserId = (req) => {
  var token = req.headers.authorization;
  console.log(`helper token ${token}`)
  return jwt.decode(token, config.secret);
};

const encodeToken = (id, username) => {
  return jwt.encode({ id, username }, config.secret);
};
module.exports = { getUserId, encodeToken };