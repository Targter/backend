import { Router } from "express";

// import {
//   initiatePasswordReset,
//   RegisterUser,
//   VerifyMail,
//   loginUser,
//   updatePasswordAfterOtpVerification,
//   verifyOtp,
//   UserAuthorization,
//   logoutUser,
// } from "../controllers/user.login.controler.js";
import { UserAuthorization } from "../controllers/user.login.controler.js";
import { handleClerkWebhook } from "../controllers/user.login.controler.js";
import { VerifyMiddleWare } from "../middlewares/authentication.middleware.js";
const router = Router();

// i have to add the webhook in this

router.route("/userAuth").post(VerifyMiddleWare, UserAuthorization);
router.route("/clerk-webhook").post(handleClerkWebhook);

export default router;
