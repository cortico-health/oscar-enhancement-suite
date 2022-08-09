import axios from "axios";

const BACKEND_URL =
    import.meta.env.VITE_CEREBRO_URL || "http://localhost:8426/api";

const getAccessToken = () => {
    return localStorage["vcnAccessToken"] || null;
};

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async(config) => {
        config.baseURL = BACKEND_URL;
        config.headers = {
            Authorization: `Bearer ${getAccessToken()}`,
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default axiosApiInstance;