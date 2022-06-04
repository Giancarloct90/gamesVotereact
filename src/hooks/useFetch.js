import { useState, useEffect } from "react";
import { getData } from "../Data/dataEntity";

const useFetch = (url, flag) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setLoading(true);
    initApp();
  }, [url, flag]);

  const initApp = async () => {
    try {
      let gamesDBS = await getData();
      if (!gamesDBS.ok) {
        throw Error("Error wiht da server");
      }
      setData(gamesDBS);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErro("error trying to get data");
      return ["error triting to get data from db"];
    }
  };

  return { data, loading, erro };
};

export default useFetch;
