import axios from "axios";
import { server, SERVER_PATHS } from "constants/constants";
import { IUserParams } from "interfaces/user";

export const loginUser = async (values: IUserParams): Promise<any> => {
  const { data } = await axios.post(
    `${server}${SERVER_PATHS.login}`,
    {
      values,
    },
    { withCredentials: false }
  );
  return data;
};

export const signUpUser = async (values: IUserParams): Promise<any> => {
  const data = await axios.post(
    `${server}${SERVER_PATHS.signUp}`,
    {
      values,
    },
    { withCredentials: false }
  );
  return data;
};
