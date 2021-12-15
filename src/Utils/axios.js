import axios from "axios";

import { API_BASE_URL } from "../globals";

export const myAxios = axios.create({
  baseURL: API_BASE_URL,
  responseType: "json",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

myAxios.CancelToken = axios.CancelToken;
myAxios.isCancel = axios.isCancel;
