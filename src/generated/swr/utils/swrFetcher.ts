import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
 const defaultInstance = axios.create({});

interface IRequest {
  query: string;
  variables: any;
}

const bareAxiosFetcher = async (
  request: IRequest,
  options: AxiosRequestConfig & { readonly arg?: any } = {},
  instance: AxiosInstance = defaultInstance
) => {
  if (!request.variables) {
    request.variables = options.arg;
  }
  return await instance({
    url: "https://graphqlzero.almansi.me/api",
    data: request,
    method: "POST",
    ...options,
  }).then((r) => r.data);
};

const axiosAdaptor = { bare: bareAxiosFetcher };
export default axiosAdaptor;
