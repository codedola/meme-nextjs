import { BASE_URL } from "../constants";
import fetch from "isomorphic-fetch";
type ConfigType = {
  method?: string;
  data?: any;
};

// data: Record<string, any>, method = "GET"
const api = {
  callJson: async (url: string, { method = "GET", data }: ConfigType = {}) => {
    const URL = BASE_URL + url;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    return fetch(URL, config).then((res: any) => res.json());
  },

  // callWithAuth: (url: string, data: Record<string, any>, method = "GET") => {
  //   const URL = BASE_URL + url;
  //   const config = {
  //     method,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer token",
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   return fetch(URL, config).then((res: any) => res.json());
  // },
};

export default api;
