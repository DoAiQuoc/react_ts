import { LoginPayload } from './../features/auth/authSlice';
import http from './http';

const authApi = {
  login(params: LoginPayload) {
    const url = 'api/v1/login';
    return http.post(url, params);
  },
};
export default authApi;
