exports.postSignup = (req, res, next) => {
	console.log(req.url);
	res.send("Signup route hit");
	console.log("lucky chauhan");
};

exports.postSignin = (req, res, next) => {
	console.log(req.url);
	res.send("Signin route hit");
};
