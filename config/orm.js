// Import mysql
var connection = require("../config/connection.js");

selectAll();
insertOne();
updateOne();

// Export connection for ORM
module.exports = connection;