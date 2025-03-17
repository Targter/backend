import { Router } from "express";
import {
  addOrUpdateChat,
  deleteChat,
  fetchChatHistory,
  fetchUserTitle,
  updateChatTitle,
} from "../controllers/user.controller.js";
import { VerifyMiddleWare } from "../middlewares/authentication.middleware.js";
const router = Router();

router.route("/updateData").post( addOrUpdateChat);
router.route("/titles").get( fetchUserTitle);
router.route("/updateChatTitle").put( updateChatTitle);
router.route("/deleteChat").delete( deleteChat);
router.route("/chatHistory/:chatId").get( fetchChatHistory);
export default router;
