import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  "token"
)}`;

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
  localStorage.clear();
};

export const login = async (data) => {
  try {
    const res = await axios.post("/auth/login", data);
    setToken(res.data.token);
    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        toast.error("Невірний логін або пароль");
        break;
      case 400:
        toast.error("Невірний формат логіна або пароля");
        break;

      default:
        break;
    }
  }
};

export const logout = async () => {
  try {
    const res = await axios.post("/auth/logout");
    clearToken();

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 500:
        toast.error("Помилка сервера. Спробуйте пізніше");
        break;

      default:
        break;
    }
  }
};
