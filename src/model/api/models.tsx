import { server, SERVER_PATHS } from "constants/constants";
import { IModelProfile } from "interfaces/model";
import { IUser } from "interfaces/user";

export const axios = require("axios").default;

export interface IModelEditProfile {
  aboutMe?: string;
  age?: string;
  country?: string;
  languages?: any;
  birthday?: string;
  gender?: string;
  sexualPreference?: string;
  ethnicity?: string;
  eyes?: string;
  hair?: string;
  bodyType?: string;
}

interface IEditModelProfileProps {
  modelId: string;
  values: IModelEditProfile;
}

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
): Promise<IModelProfile[]> => {
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
