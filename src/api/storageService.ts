import api, { type ApiResponse } from "../api/api";
// import type { SignupPayload, LoginPayload, AuthResponse } from "./authTypes";
import { endpoint } from "./endpoints";

export const StorageService = {
    upload: (data: string): ApiResponse<any> =>
        api.post(endpoint.upload, data),

    sendToAWS: (data: any, file: any, options: any): ApiResponse<any> =>
        api.put(data.url, file, options)
};