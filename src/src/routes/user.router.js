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
import { handleClerkWebhook } from "../controllers/user.login.controler.js";
import { VerifyMiddleWare } from "../middlewares/authentication.middleware.js";
const router = Router();

// router.route("/Register").post(RegisterUser);
// router.route("/verifyOtp").post(VerifyMail);
// router.route("/Login").post(loginUser);
// check user validation
// router.route("/userAuth").post(VerifyMiddleWare, UserAuthorization);
// Forget password:
// router.route("/forgetPassword").post(initiatePasswordReset);
// router.route("/varifymail").post(verifyOtp);
// router.route("/updatePassword").post(updatePasswordAfterOtpVerification);
// router.route("/logout").get(logoutUser); // ✅ Logout route added

// i have to add the webhook in this

router.route("/clerk-webhook").post(handleClerkWebhook);

export default router;
