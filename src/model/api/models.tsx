import { server, SERVER_PATHS } from "constants/constants";
import { IUser } from "interfaces/user";

export const axios = require("axios").default;

export const getAllModels = async (values: string): Promise<IUser[]> => {
  try {
    const response = await axios.post(
      `${server}${SERVER_PATHS.modelsList}`,
      {
        values,
      },
      {
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const getTopModels = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get(`${server}${SERVER_PATHS.topModels}`, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
