import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = `https://kdm-api.onrender.com/api`;
// axios.defaults.baseURL = `http://localhost:10000/api`;

const noAuth = () => toast.error("Ви не авторизовані");
const errorServer = () => toast.error("Помилка сервера");
export const addKdm = async (data) => {
  try {
    const res = await axios.post("/kdm", data);

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        noAuth();
        break;
      case 409:
        toast.error("Такий ключ вже існує");
        break;

      default:
        break;
    }
  }
};

export const getKdm = async () => {
  try {
    const res = await axios.get("/kdm");

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        noAuth();
        break;
      case 500:
        errorServer();
        break;

      default:
        break;
    }
  }
};

export const updateKdm = async ({ id, name, timeStart, timeEnd, hall }) => {
  try {
    const res = await axios.put(`/kdm/${id}`, {
      name,
      timeStart,
      timeEnd,
      hall,
    });

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        noAuth();
        break;
      case 500:
        errorServer();
        break;

      default:
        break;
    }
  }
};

export const removeKdm = async (id) => {
  try {
    const res = await axios.delete(`/kdm/${id}`);

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        noAuth();
        break;
      case 500:
        errorServer();
        break;

      default:
        break;
    }
  }
};
