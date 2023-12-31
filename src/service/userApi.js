import axios from "axios";
import { toast } from "react-toastify";
import { setLSToken } from "./authApi";

export const currentUser = async () => {
  setLSToken();
  try {
    const res = await axios.get("/user/currentі");

    return res;
  } catch (error) {
    switch (error.response.status) {
      case 401:
        toast.info("Щоб вносити зміни потрібно авторизуватись", {
          autoClose: 5000,
        });
        break;

      default:
        break;
    }
  }
};
