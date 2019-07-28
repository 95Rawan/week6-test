// write the query to post the data into Database
const dbConnection = require("../db_connection");

const postData = (result, cb) => {
	dbConnection.query(
		`Insert into cities (name, country) values ($1, $2)`,
		[result.name, result.country],
		(error, res) => {
			if (error) {
				return cb(error);
			}
			cb(null, res.rows);
		}
	);
};

module.exports = postData;
