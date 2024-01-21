import express from "express";
import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.userLogin);
router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.addCustomer);

export default router;
