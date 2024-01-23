import { NextFunction, Request, Response } from "express";
import { ActivationDTO, LoginDTO, SignupDTO } from "../dto/auth";
import * as authService from "../services/auth";
import { cookieOption } from "../utils/jwtToken";
import CustomError from "../utils/customError";

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const signupDTO: SignupDTO = req.body;
        const result = await authService.signup(signupDTO);
        res.status(201).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function activation(req: Request, res: Response, next: NextFunction) {
    try {
        const activationDTO: ActivationDTO = req.body;
        const result = await authService.activation(activationDTO);
        res.status(201).cookie("token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const loginDTO: LoginDTO = req.body;
        const result = await authService.login(loginDTO);
        res.status(201).cookie("token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function getAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await authService.getAuth(req.userId)
        res.status(201).json({ success: true, result });
    } catch (error) { next(error) }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
    try {
        res.cookie("token", null, {expires: new Date(Date.now()), httpOnly: true});
        res.status(201).json({success: true, message: "로그아웃 하였습니다."})
    } catch (error) { next(error); }
};