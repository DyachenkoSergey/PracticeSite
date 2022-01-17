import axios from "axios";
import { server, SERVER_PATHS } from "constants/constants";
import { IUserParams } from "interfaces/user";
import { toast } from "react-toastify";

export const logInUser = async (values: IUserParams): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.logIn}`,
      {
        values,
      },
      { withCredentials: false }
    );
    if (data.token) {
      toast("user is logged in");
    }
    return data;
  } catch (error: any) {
    const message = error.response.data.message || "Something went wrong";
    toast(message);
  }
};

export const logOutUser = async (userId: string): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.logOut}`,
      {
        userId,
      },
      { withCredentials: false }
    );
    if (data.message === "user logged out") {
      toast(data.message);
    }
  } catch (error: any) {
    const message = error.response.data.message || "Something went wrong";
    toast(message);
  }
};

export const signUpUser = async (values: IUserParams): Promise<any> => {
  try {
    const data = await axios.post(
      `${server}${SERVER_PATHS.signUp}`,
      {
        values,
      },
      { withCredentials: false }
    );
    return data;
  } catch (error: any) {
    const message = error.response.data.message || "Something went wrong";
    toast(message);
  }
};
