import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IRequest {
  query: string;
  variables: any;
}
const defaultInstance = axios.create({});

const bareAxiosFetcher = async (
  request: IRequest,
  options: AxiosRequestConfig = {},
  instance: AxiosInstance = defaultInstance
) => {
    console.log(":fdgjkjfhgkjhgkjhg")
  return await instance({
    url: "https://graphqlzero.almansi.me/api",
    data: request,
    method: "POST",
    ...options,
  }).then((r) => r.data);
};

const mutationAxiosFetcher = async (
  url: string,
  options: AxiosRequestConfig = {},
  instance: AxiosInstance = defaultInstance
) => {
  return await instance({
    url,
    ...options,
  }).then((r) => r.data);
};

const axiosAdaptor = { bare: bareAxiosFetcher, mutation: mutationAxiosFetcher };
export default axiosAdaptor;
