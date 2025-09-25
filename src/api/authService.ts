import api, { type ApiResponse } from "../api/api";
import type { SignupPayload, LoginPayload, AuthResponse } from "./authTypes";
import { endpoint } from "./endpoints";

export const AuthService = {
    signup: (data: SignupPayload): ApiResponse<AuthResponse> =>
        api.post(endpoint.signup, data),

    login: (data: LoginPayload): ApiResponse<AuthResponse> =>
        api.post(endpoint.login, data),

    session: (): ApiResponse<AuthResponse> =>
        api.get(endpoint.session)
};