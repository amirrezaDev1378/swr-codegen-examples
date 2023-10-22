import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

interface IRequest {
    query:string;
    variables:any
}

const defaultInstance = axios.create({});

const axiosAdaptor = async (request:IRequest, options: AxiosRequestConfig & {readonly arg?: any} = {}, instance: AxiosInstance = defaultInstance) => {
    if(!request.variables) request.variables=options.arg
    return await instance({
        url: http://localhost:4000/graphql,
        data: request,
        method: "POST",
        ...options,
    }).then(r => r.data);
};





export default axiosAdaptor;
