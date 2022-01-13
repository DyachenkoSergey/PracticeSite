import axios from "axios";
import { server, SERVER_PATHS } from "constants/constants";
import { IUserParams } from "interfaces/user";
import { toast } from "react-toastify";
// import CustomError from "sharedComponents/CustomError/CustomError";

export const loginUser = async (values: IUserParams): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.login}`,
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

// export const logoutUser = async (userId: string): Promise<any> => {
//   try {
//     const { data } = await axios.post(
//       `${server}${SERVER_PATHS.logOut}`,
//       {
//         userId,
//       },
//       { withCredentials: false }
//     );
//     return data;
//   } catch (error: any) {
//     const message = error.response.data.message || "Something went wrong";
//     toast(message);
//   }
// };

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
