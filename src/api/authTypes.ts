export interface SignupPayload {
  fullname: string;
  email: string;
  password: string;
  mobile: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: any;
  user?: {
    id: string;
    fullname: string;
    email: string;
    mobile: string;
  };
  token?: string;
}
