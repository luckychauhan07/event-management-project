// EXTERNAL MODULES
const express = require("express");

// INTERNAL MODULES
const authController = require("../controllers/authController");
const { jwtAuthMiddleware } = require("../controllers/jwtTokenController");

const authRouter = express.Router();

authRouter.post("/signup", authController.postSignup);

authRouter.post("/login", authController.postSignin);

authRouter.post("/signout", jwtAuthMiddleware, authController.postSignout);

authRouter.get("/verify", jwtAuthMiddleware);

module.exports = authRouter;
