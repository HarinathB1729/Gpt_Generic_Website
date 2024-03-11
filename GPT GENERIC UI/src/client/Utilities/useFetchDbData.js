import { api } from "../../api";
import { useEffect, useState } from "react";
import TelEngObjBuilder from "./TelEngObjBuilder";

const useFetchDbData = (url) => {
  const [dbData, setDbData] = useState({});

  // console.log("usefetchdb url",url)
  useEffect(() => {
    const fetchData = async () => {
      await api.get(url)
        .then((res) => {
          // console.log("usefetchdbdata, res",res.data)
          setDbData(TelEngObjBuilder(res.data[0]));
        })
        .catch((err) => console.log("Error :", err));
    }
    fetchData();

  }, [url]);

  // console.log("dbdata",dbData)
  return dbData;
};

export default useFetchDbData;
