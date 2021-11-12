import HTTPService from "Service/HTTPServiceUsers";

export const axios = require("axios").default;

export interface IUsers {
  name: string;
  age?: string;
  role?: string;
  email: string;
  password: string;
}

export const signUpUsers = async (values: IUsers): Promise<IUsers> => {
  try {
    const { data } = await HTTPService.post("/mockUsers", { values });
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const signUpUsersFromApi = async (values: IUsers): Promise<IUsers> => {
  const data = await signUpUsers(values);
  return data;
};
