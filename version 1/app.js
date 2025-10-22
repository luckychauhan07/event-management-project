// EXTERNAL MODULES
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// INTERNAL MODULES
const authRouter = require("./routes/authRoutes");
const { jwtAuthMiddleware } = require("./controllers/jwtTokenController");

const app = express();

app.use(cors());

// used to send or read json data
app.use(express.json());

// used to parsing the body object
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
	console.log("welcome to home page");
	res.status(200).json({ message: "welcome to home page" });
});

app.use("/auth", authRouter);

app.use(jwtAuthMiddleware);

app.use("/lucky", (req, res, next) => {
	console.log(req.user);
	res.send("lucky chauhan");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`the server is running on port number ${port}`);
});
