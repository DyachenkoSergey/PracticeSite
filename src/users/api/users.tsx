import axios from "axios";
import { server, SERVER_PATHS } from "constants/constants";
import { IUser, IUsers } from "interfaces/user";

export const getOneUser = async (values: IUsers): Promise<IUser> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.user}`,
      {
        values,
      },
      { withCredentials: false }
    );
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const logOutUser = async (): Promise<IUser> => {
  try {
    const { data } = await axios.get(`${server}${SERVER_PATHS.logOut}`, {
      withCredentials: false,
    });
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const registerUser = async (values: IUsers): Promise<string> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.register}`,
      {
        values,
      },
      { withCredentials: false }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error();
  }
};
