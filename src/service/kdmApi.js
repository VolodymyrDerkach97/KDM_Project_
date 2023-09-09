import axios from 'axios';

axios.defaults.baseURL = `https://kdm-api.onrender.com`;
// axios.defaults.baseURL = `http://localhost:10000`;

export const addKdm = async data => {
  try {
    const res = await axios.post('/api/kdm', data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getKdm = async () => {
  try {
    const res = await axios.get('/api/kdm');
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const updateKdm = async ({ id, name, timeStart, timeEnd }) => {
  try {
    const res = await axios.put(`/api/kdm/${id}`, { name, timeStart, timeEnd });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const removeKdm = async id => {
  try {
    const res = await axios.delete(`/api/kdm/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
