import HTTPService from "Service/HTTPService";

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
    const response = await HTTPService.get();
    return response;
  } catch (error) {
    throw new Error();
  }
};

export const getAllModelsAPI = async (): Promise<IModel[]> => {
  const data = await getAllModels();
  return data;
};
