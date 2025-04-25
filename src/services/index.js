import axios from 'axios';

// Hàm tạo instance Axios
const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL, // Lấy URL từ .env
        timeout: 10000, // Thời gian chờ tối đa (ms)
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // (Tùy chọn) Thêm interceptor để xử lý lỗi hoặc token
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('API Error:', error.response?.data || error.message);
            return Promise.reject(error);
        }
    );

    return instance;
};

// Tạo instance và export dưới tên $http
const $http = createAxiosInstance();
export default $http;