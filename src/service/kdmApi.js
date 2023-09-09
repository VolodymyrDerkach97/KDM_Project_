import axios from "axios";

axios.defaults.baseURL = `https://kdm-api.onrender.com/api`;
// axios.defaults.baseURL = `http://localhost:10000/api`;

export const addKdm = async (data) => {
  try {
    const res = await axios.post("/kdm", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getKdm = async () => {
  try {
    const res = await axios.get("/kdm");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateKdm = async ({ id, name, timeStart, timeEnd }) => {
  try {
    const res = await axios.put(`/kdm/${id}`, { name, timeStart, timeEnd });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeKdm = async (id) => {
  try {
    const res = await axios.delete(`/kdm/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
