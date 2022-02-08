import { server, SERVER_PATHS } from "constants/constants";
import {
  IAmountOfElements,
  IEditModelProfileProps,
  IGetFilterModels,
  IModelProfile,
} from "interfaces/model";
import { IUser } from "interfaces/user";
import { toast } from "react-toastify";
export const axios = require("axios").default;

export const getModelsWithoutSearchParams = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get(`${server}${SERVER_PATHS.modelsList}`, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const getAllModels = async ({
  searchQueryParam = "",
  value = {},
}: IGetFilterModels): Promise<IUser[]> => {
  console.log(searchQueryParam, value);
  try {
    const queryKey = Object.keys(value)[0];
    const requestValue = Object.values(value)[0];
    if (queryKey && requestValue) {
      const response = await axios.get(
        `${server}${SERVER_PATHS.filterModels}?searchQueryParam=${searchQueryParam}&${queryKey}=${requestValue}`,
        {
          withCredentials: false,
        }
      );
      return response.data;
    }
    const response = await axios.get(
      `${server}${SERVER_PATHS.filterModels}?searchQueryParam=${searchQueryParam}`,
      {
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const getModel = async (modelId: string): Promise<IUser> => {
  try {
    const response = await axios.post(
      `${server}${SERVER_PATHS.model}`,
      {
        modelId,
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

export const getModelProfile = async (
  modelId: string
): Promise<IModelProfile> => {
  try {
    const response = await axios.post(
      `${server}${SERVER_PATHS.modelProfile}`,
      {
        modelId,
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

export const editModelProfile = async ({
  modelId,
  values,
}: IEditModelProfileProps): Promise<any> => {
  try {
    const response = await axios.post(
      `${server}${SERVER_PATHS.editModelProfile}`,
      {
        modelId,
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

export const getNumberOfTabModels = async (): Promise<IAmountOfElements> => {
  try {
    const response = await axios.get(
      `${server}${SERVER_PATHS.getNumberOfTabModels}`,
      {
        withCredentials: false,
      }
    );
    return response.data;
  } catch (error: any) {
    const message = error.response.data.message || "Something went wrong";
    toast(message);
    throw new Error();
  }
};
