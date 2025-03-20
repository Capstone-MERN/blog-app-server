import { Router } from "express";
import { loginController, signupController } from "../auth/AuthController.js";

const router = Router();

router.get("/login", loginController);

router.post("/signup", signupController);

export default router;
