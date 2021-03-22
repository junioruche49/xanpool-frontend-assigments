import axios from "axios";

export default function apiHandler() {
  const axiosInstance = axios.create({
    baseURL: "https://api.github.com",
  });

  return axiosInstance;
}
