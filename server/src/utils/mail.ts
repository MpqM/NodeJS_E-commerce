import nodemailer from 'nodemailer';
import config from '../configs/validatedEnv';
import { UserDoc } from '../models/user';
import CustomError from './customError';
import { SignupDTO } from '../dto/auth';


interface mailOptions { email: string; subject: string; html: string }
async function sendMail(options: mailOptions) {
    const transporter = nodemailer.createTransport({
        host: config.smptHost,
        port: config.smptPort,
        service: config.smptService,
        auth: { user: config.smptMail, pass: config.smptPassword, },
    });

    const mailOptions = {
        from: config.smptMail,
        to: options.email,
        subject: options.subject,
        html: options.html,
    };

    await transporter.sendMail(mailOptions);
};

export async function sendActivationEmail(signupDTO: SignupDTO, activationUrl: string): Promise<void> {
    try {
        await sendMail({
            email: signupDTO.email,
            subject: "E-COMMERCE 계정 활성화",
            html: `<div style="text-align: center;">
                        <p>안녕하세요 ${signupDTO.name}님,</p>
                        <p>E-COMMERCE 계정을 활성화 시키려면 아래 링크를 클릭해주세요:</p>
                        <a href="${activationUrl}">${activationUrl}</a>
                    </div>`
        });
    } catch (error) { throw new CustomError("Failed to send activation email", 500); }
}
