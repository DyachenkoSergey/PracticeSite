export interface IUserParams {
  name: string;
  password?: string;
  email?: string;
  role?: string;
  studioId?: string;
}

export interface IUser {
  userId: string;
  userName: string;
  userEmail: string;
  userTokens: number;
  userRole: string;
  userModels?: Array<string>;
  token?: string;
}
