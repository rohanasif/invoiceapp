import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.userLogin);



export default router;
