import { fetchDataFromApi } from "../utils/api";
import { useState, useEffect } from "react";

export const useFetch = (endpoints) => {
    const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoints]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoints);
    setData(res);
  };
  return {data};
};
