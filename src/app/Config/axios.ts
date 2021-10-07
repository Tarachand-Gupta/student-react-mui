import axios from "axios";

const getAxiosInstance = async () => {
  // const token = await getToken();
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
};

export default getAxiosInstance;
