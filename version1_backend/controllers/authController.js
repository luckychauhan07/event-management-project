const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/authModel");
const { generateToken } = require("./jwtTokenController");

exports.postSignup = [
	check("firstName")
		.trim()
		.isLength({ min: 2 })
		.withMessage("first name should be atleast 2 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("First name should contain aplhabets only"),
	check("lastName")
		.trim()
		.matches(/^[A-Za-z\s]*$/)
		.withMessage("First name should contain aplhabets only"),
	check("email")
		.trim()
		.isEmail()
		.withMessage("Please enter a valid email address")
		.normalizeEmail(),
	check("password")
		.trim()
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long")
		.matches(/[A-Z]/)
		.withMessage("Password must contain at least one uppercase letter")
		.matches(/[a-z]/)
		.withMessage("Password must contain at least one lowercase letter")
		.matches(/[0-9]/)
		.withMessage("Password must contain at least one number")
		.matches(/[@$!%*?&]/)
		.withMessage("Password must contain at least one special character"),
	check("confirmPassword").custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error("Passwords do not match");
		}
		return true;
	}),
	async (req, res, next) => {
		console.log(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const err = errors.array().map((e) => e.msg);
			return res.status(401).json({
				err,
				status: "failed",
				message: "validation error",
			});
		}
		let { firstName, lastName, email, age, gender, password, id } =
			req.body;
		const hashedPassword = await bcryptjs.hash(password, 12);
		const user = new User(
			firstName,
			lastName,
			email,
			age,
			gender,
			(password = hashedPassword),
			id
		);
		user.save()
			.then(([result]) => {
				console.log("Insert result:", result);
				return res.status(201).json({
					message: "user registration done",
					status: "success",
					data: {
						firstName,
						lastName,
						email,
						id,
						gender,
					},
				});
			})
			.catch((err) => {
				console.log(err);
				return res.status(401).json({
					message: "email is already registered",
					status: "failed",
					error: err.message,
				});
			});
	},
];

exports.postSignin = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(401).json({
			message: "Email and password are required",
			status: "failed",
		});
	}
	try {
		const userDataObj = await User.findUserByEmail(email);
		const user = userDataObj[0][0];
		const isMatch = await bcryptjs.compare(password, user.password);
		if (isMatch) {
			console.log("pasword matched");
			// create token for user
			const token = generateToken({
				email,
				userId: user.id,
				tokenVersion: user.token_version,
			});
			return res.status(201).json({
				message: "user logged in successfully",
				data: {
					userId: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
				},
				status: "success",
				token,
			});
		}
		return res.status(401).json({
			message: "invalid crediantials",
			data: req.body,
			status: "failed",
		});
	} catch (err) {
		return res.status(401).json({
			message: err.msg,
			status: "failed",
			data: req.body,
			err: err,
		});
	}
};

exports.postSignout = async (req, res, next) => {
	try {
		const userId = req.user.userId;
		await User.updateById(userId);

		// ✅ Redirect to home page (no JSON here)
		return res.redirect("/");
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Logout failed", error: err });
	}
};

exports.verifyToken = async (req, res, next) => {
	console.log(req.url);
	const tokenFound = req.headers.authorization;
	if (!tokenFound) {
		return res.status(401).json({
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
			return res.status(201).json({
				error: "Token validated successfully",
				status: true,
			});
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
