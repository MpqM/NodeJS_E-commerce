import config from '../configs/validatedEnv';
import jwt from 'jsonwebtoken';
import { ObjectId } from "mongoose";
import { UserDoc } from '../models/user';
import { Request } from 'express';
import { SignupDTO } from '../dto/auth';

export function createActivationToken(signupDTO: SignupDTO) { return jwt.sign(signupDTO, config.activationSecret, { expiresIn: "5m" }) }

export const cookieOption = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
};