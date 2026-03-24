import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chathub-production-5f0e.up.railway.app/api",
   withCredentials: true,
})