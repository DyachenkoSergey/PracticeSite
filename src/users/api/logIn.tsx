import HTTPService from "Service/HTTPServiceUsers";

export const axios = require("axios").default;

interface IUsers {
  name: string;
  age?: string;
  role?: string;
  password: string;
}

export const getUsers = async (): Promise<IUsers[]> => {
  try {
    const response = await HTTPService.get();
    return response;
  } catch (error) {
    throw new Error();
  }
};
getUsers();

export const getUsersFromApi = async (
  values: IUsers
): Promise<IUsers | undefined> => {
  const data = await getUsers();
  const findUser = data.find(
    (item: any) =>
      item.password === values.password && item.name === values.name
  );
  return findUser;
};
