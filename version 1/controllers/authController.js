const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/authModel");

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
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(401).json(errors);
		}
		const { firstName, lastName, email, age, gender, password, id } =
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
					message: "user saved done",
					data: req.body,
				});
			})
			.catch((err) => {
				console.log(err);
				return res
					.status(401)
					.json({ message: "email is already registered" });
			});
	},
];

exports.postSignin = (req, res, next) => {
	const { email, password } = req.body;
	if (email) {
		User.findUserByEmail(email)
			.then((user) => {
				console.log(user[0]);
				bcrypt
					.compare(password, user[0][0].password)
					.then((isMatch) => {
						if (isMatch) {
							req.user = user[0][0];
							return res.status(201).json({
								message: "user find",
								data: req.body,
							});
						}
						res.status(401).json({
							message: "user not found",
							data: req.body,
						});
					})
					.catch((err) => {
						res.status(401).json({
							message: "user not found",
							data: req.body,
							err: err,
						});
					});
			})
			.catch((err) => {
				res.status(401).json({
					message: "user not found",
					data: req.body,
					err: err,
				});
			});
	}
};
