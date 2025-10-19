const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.jwtAuthMiddleware = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
	if (token) {
		console.log("jwt token found");
		try {
			const decoded = jwt.verify(token, process.env.secret_key);
			req.user = decoded;
		} catch (err) {
			console.log(err);
			res.send("lucky");
		}
	} else {
		console.log("jwt token not found");
		res.send("token not found");
	}
};

exports.generateToken = (userData) => {
	return jwt.sign(userData, process.env.secret_key);
};
