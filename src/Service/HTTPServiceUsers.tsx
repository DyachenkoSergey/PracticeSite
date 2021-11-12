import { AxiosPromise, AxiosResponse } from "axios";

const axios = require("axios").default;

axios.defaults.withCredentials = true;

const baseUrl = (path: string | number): string => {
  return `http://localhost:3004/mockUsers`;
};

export default class HTTPService {
  static get(path = ""): Promise<any> {
    return axios({
      method: "get",
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
  }

  static post(path = "", data: any): Promise<AxiosPromise> {
    return axios({
      method: "post",
      url: baseUrl(path),
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
  }

  static put(path = "", data: any): Promise<AxiosPromise> {
    return axios({
      method: "put",
      url: baseUrl(path),
      data,
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
  }

  static patch(path = "", data: any): Promise<AxiosPromise> {
    return axios({
      method: "patch",
      url: baseUrl(path),
      data,
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
  }

  static delete(path = ""): Promise<AxiosPromise> {
    return axios({
      method: "delete",
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(() => {
        throw new Error();
      });
  }
}
