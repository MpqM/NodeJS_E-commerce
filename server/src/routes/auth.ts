import express, { Request, Response } from "express";
import * as authController from "../controllers/auth";
import { asyncErrorHandler } from "../middlewares/error";
import { isAutenticated } from "../middlewares/auth";

const router = express.Router();

router.post("/signup", asyncErrorHandler(authController.signup));
router.post("/activation", asyncErrorHandler(authController.activation));
router.post("/login", asyncErrorHandler(authController.login));
router.get("/logout", asyncErrorHandler(isAutenticated), asyncErrorHandler(authController.logout));
router.get("/getauth", asyncErrorHandler(isAutenticated), asyncErrorHandler(authController.getAuth))

export default router;