import { server, SERVER_PATHS } from "constants/constants";

export const axios = require("axios").default;

interface IModel {
  name: string;
  age: string;
  role: string;
  video: string;
  id: string;
}

export const getAllModels = async (): Promise<IModel[]> => {
  try {
    const response = await axios.get(`${server}${SERVER_PATHS.modelsList}`, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const getTopModels = async (): Promise<IModel[]> => {
  try {
    const response = await axios.get(`${server}${SERVER_PATHS.topModels}`, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
