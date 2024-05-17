const express = require("express");

const router = express.Router();
const { login, googleLogin, register } = require("../controller/auth/authUser");
const { validationHandler } = require("../middleware");
const {
  userLoginSchema,
  userRegisterSchema,
  userGoogleLoginSchema,
} = require("../validations");
// const { authMiddleware } = require("../middleware/auth");

router.post("/register", validationHandler(userRegisterSchema), register);
router.post("/login", validationHandler(userLoginSchema), login);
router.post(
  "/google-login",
  validationHandler(userGoogleLoginSchema),
  googleLogin,
);
module.exports = router;
