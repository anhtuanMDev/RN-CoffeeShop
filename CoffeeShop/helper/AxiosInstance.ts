import axios, { AxiosInstance as AxiosInstanceType } from 'axios';

const AxiosInstance = (contentType: string = 'application/json'): AxiosInstanceType => {
    const axiosInstance: AxiosInstanceType = axios.create({
        baseURL: 'http://192.168.1.5:2101/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${''}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }as any;
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;