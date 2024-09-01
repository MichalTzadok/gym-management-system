
export interface SignUpData {
    username: string;
    email: string;
    password: string;
    role: string;
  }
  
  export interface User {
    _id: string;
    username: string;
    email: string;
    role: string;
  }
export interface SignInData {
    email: string,
    password: string,
}
export interface SignInResponse {
    message: string;
    user: User;
    token: string;
}

