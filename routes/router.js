import { Router } from "express";
const router = Router();

import authController from "../controllers/authController.js";
import indexController from "../controllers/indexController.js";
import { validateSignup } from "../validators/authValidators.js";

router.post("/sign-up", [validateSignup, authController.addUser]);

router.post("/log-in", authController.login);

router.get("/log-out", authController.logout);

router.get("/", indexController.getIndex);

export default router;
