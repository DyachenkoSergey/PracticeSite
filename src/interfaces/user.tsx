export interface IUsers {
  name: string;
  age?: string;
  role?: string;
  password?: string;
  email?: string;
}

export interface IUser {
  userId: string;
  userName: string;
  userRole: string;
  userPassword: string;
  userEmail: string;
  userTokens: number;
}
