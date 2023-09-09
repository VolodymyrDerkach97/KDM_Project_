import axios from "axios";
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
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.post("/auth/logout");
    clearToken();

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
