const jwt = require("jsonwebtoken");
const User = require("../models/authModel");
require("dotenv").config();

exports.jwtAuthMiddleware = async (req, res, next) => {
	const tokenFound = req.headers.authorization;
	if (!tokenFound) {
		return res
			.status(401)
			.json({
				message: "token not found",
				isLoggedIn: false,
				status: false,
			});
	}
	const token = tokenFound.split(" ")[1];
	if (token) {
		console.log("jwt token found");
		try {
			const decoded = jwt.verify(token, process.env.secret_key);
			const userDataObj = await User.findUserByEmail(decoded.email);
			const user = userDataObj[0][0];
			if (!user) {
				return res.status(400).json({
					message: "user not found",
					status: false,
				});
			}
			if (user.token_version !== decoded.tokenVersion) {
				return res.status(400).json({
					error: "Token invalidated, please log in again",
					status: false,
				});
			}
			req.user = decoded;
			next();
		} catch (err) {
			console.log(err);
			return res.status(400).json({
				message: "token expired or invalid token",
				err,
				status: false,
			});
		}
	} else {
		console.log("jwt token not found");
		return res.status(400).json({
			message: "token not found",
			status: false,
		});
	}
};

exports.generateToken = (userData) => {
	return jwt.sign(userData, process.env.secret_key);
};
