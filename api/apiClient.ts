import qs from "qs";
import axios, { AxiosResponse } from "axios";
// import Cookies from "universal-cookie";

const baseURLApp = process.env.NEXT_PUBLIC_API;

const apiClient = axios.create({
  baseURL: baseURLApp,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

// const cookies = new Cookies();

apiClient.interceptors.request.use(
  async (config) => {
    const noAuthRequiredRoutes = ["/login"];
    const isNoAuthRoute = noAuthRequiredRoutes.some((route) =>
      config.url?.includes(route)
    );

    if (!isNoAuthRoute) {
      //   const accessToken = cookies.get("access_token");
      const accessToken = "2|F2Hs74BLDnMYLtZyHxH7lP5DEIdCzLZsSQZlFRhq1b385234";
      if (accessToken && config.headers) {
        config.headers["Authorization"] = "Bearer " + accessToken;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
export default apiClient;
