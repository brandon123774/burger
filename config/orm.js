// Import mysql connect
var connection = require ('../config/connection');

// helper function for mysql 
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// another helper function
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
	// Function that returns all table entries
	selectAll: function(table, cb) {

		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + table + ";";

		//database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			// callback
			cb(result);
		});
	},

	// Function that insert a single table entry
	insertOne: function(table, cols, vals, cb) {

		// Construct the query string that inserts a single row into the target table
			var queryString = "INSERT INTO " + tableInput + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
			console.log(queryString);
			connection.query(queryString, vals, function (err, result) {
				if (err) {
					throw err;
				}
				cb(result);
			});
		},

	//Update the table values
		updateOne: function (table, objColVals, condition, cb) {
			var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
			console.log( queryString);
			connection.query(queryString, function (err, result) {
				if (err) {
					throw err;
				}
				cb(result);
			});
		}
	};

// Export the orm object for use in other modules
module.exports = orm; 