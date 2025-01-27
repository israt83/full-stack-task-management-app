import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://full-stack-task-management-app-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;