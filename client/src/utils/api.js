import axios from "axios";
// console.log(process.env.REACT_APP_DEV_URL);
const params = {
  headers: {
    // Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,

    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    // console.log(process.env)
    // console.log(process.env.REACT_APP_DEV_URL)
    const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url , params)
    // const { data } = await axios.get(url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
