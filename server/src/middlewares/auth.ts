import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customError";
import config from "../configs/validatedEnv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user";
import mongoose from "mongoose";

export async function isAutenticated(req: Request, res: Response, next: NextFunction) {
        const { token } = req.cookies;
        if (!token) { throw new CustomError('로그인이 필요합니다.', 401); }
        const decodedToken= jwt.verify(token, config.jwtSecret) as JwtPayload;
        const user = await User.findById(decodedToken.id);
        if (!user) { throw new CustomError('유효하지 않은 사용자입니다.', 401); }
        req.userId = decodedToken.id
        next()
}