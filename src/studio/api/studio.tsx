import axios from "axios";
import { server, SERVER_PATHS } from "constants/constants";
import { toast } from "react-toastify";

export const getStudioModels = async (studioId: string): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${server}${SERVER_PATHS.studioModels}`,
      {
        studioId,
      },
      { withCredentials: false }
    );
    return data;
  } catch (error: any) {
    const message = error.response.data.message || "Something went wrong";
    toast(message);
  }
};
