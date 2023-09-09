import axios from "axios";

export const currentUser = async () => {
  try {
    const res = await axios.get("/user/current");

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
