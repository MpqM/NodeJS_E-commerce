export interface SignupDTO {
    name: string;
    email: string;
    password: string;
}

export interface ResultSignupDTO {
    success: boolean;
    message: string;
}

export interface ActivationDTO {
    activationToken: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}