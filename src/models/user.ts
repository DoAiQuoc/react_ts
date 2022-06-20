export interface User {
  id: number;
  user_id: string;
  user_name: string;
  [key: string]: string | number;
}
export interface UserData<T> {
  token: string;
  expires_in: number;
  profile: T;
}
