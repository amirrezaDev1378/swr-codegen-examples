import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

interface IRequest {
    query?:string;
    variables?:any
}

const defaultInstance = axios.create({});

const axiosAdaptor = async (request:IRequest, options: AxiosRequestConfig & {readonly arg?: any} = {}, instance: AxiosInstance = defaultInstance) => {
    if(!request.variables) request.variables=options.arg
    return await instance({
        url: "https://graphqlzero.almansi.me/api",
        data: request,
        method: "POST",
        ...options,
    }).then(r => r?.data?.data);
};





export default axiosAdaptor;
