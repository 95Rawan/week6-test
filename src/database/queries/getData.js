const dbConnection = require("../db_connection");

const getData = cb => {
	dbConnection.query(`Select * from cities`, (err, res) => {
		if (err) {
			console.log("error", err);
			return cb(err);
		}
		cb(null, res.rows);
	});
};

module.exports = getData;
