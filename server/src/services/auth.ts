import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../configs/validatedEnv";
import { ActivationDTO, LoginDTO, ResultSignupDTO, SignupDTO } from "../dto/auth";
import { User, UserDoc } from "../models/user";
import CustomError from "../utils/customError";
import { createActivationToken } from "../utils/jwtToken";
import { sendActivationEmail } from "../utils/mail";

export async function signup(signupDTO: SignupDTO): Promise<string> {
    try {
        const { name, email, password } = signupDTO
        if (!name || !email || !password) { throw new CustomError("name, email, password are required", 422) }
        const existingUser = await User.findOne({ email });
        if (existingUser) { throw new CustomError("User already exists", 409); }
        const activationToken = createActivationToken(signupDTO);
        const activationUrl = `http://localhost:3000/activation/${activationToken}`
        await sendActivationEmail(signupDTO, activationUrl)
        return `계정을 활성화 하기 위해 ${signupDTO.email}을 확인해주세요.`
    } catch (error: any) { throw new CustomError(error.message, 400) }
};

export async function activation(activationDTO: ActivationDTO): Promise<string> {
    try {
        const { activationToken } = activationDTO;
        const signupDTO: JwtPayload = jwt.verify(activationToken, config.activationSecret) as JwtPayload;
        const { name, email, password } = signupDTO
        if (!signupDTO) { throw new CustomError("유효하지 않은 토큰입니다.", 400); }
        let user = await User.findOne({ email })
        if (user) { throw new CustomError("유저가 이미 존재합니다.", 400); }
        user = await User.create({ name, email, password })
        return user.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function login(loginDTO: LoginDTO): Promise<string> {
    try {
        const { email, password } = loginDTO
        if (!email || !password) { throw new CustomError("항목을 전부 입력해주세요.", 400) }
        const user = await User.findOne({ email }).select("+password")
        if (!user) { throw new CustomError("존재하지 않는 유저 입니다. ", 400) }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) { throw new CustomError("올바른 정보를 기입해주세요", 400) }
        return user.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function getAuth(id: string): Promise<UserDoc> {
    try {
        const user = await User.findById(id);
        if (!user) { throw new CustomError("존재하지 않는 유저 입니다.", 400) }
        return user
    } catch (error: any) { throw new CustomError(error.message, 500) }
}