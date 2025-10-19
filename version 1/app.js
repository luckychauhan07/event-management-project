// EXTERNAL MODULES
const express = require("express");
require("dotenv").config();

// INTERNAL MODULES
const authRouter = require("./routes/authRoutes");
const { jwtAuthMiddleware } = require("./controllers/jwtTokenController");

const app = express();

app.use(jwtAuthMiddleware);

app.use(authRouter);

app.use((req, res, next) => {
	res.send("lucky chauhan");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`the server is running on port number ${port}`);
});
