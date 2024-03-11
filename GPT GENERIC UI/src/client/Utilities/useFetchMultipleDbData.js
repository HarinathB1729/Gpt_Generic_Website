import { api } from "../../api";
import React, { useEffect, useState } from "react";
import TelEngObjBuilderMultiple from "./TelEngObjBuilderMultiple";

const useFetchMultipleDbData = (url) => {
  const [dbData, setDbData] = useState({});
  // console.log("url", url);

  useEffect(() => {
    const fetchData = async () => {
      await api.get(url)
        .then((res) => {         
            setDbData(TelEngObjBuilderMultiple(res.data));       
        })
        .catch((err) => console.log("Error :", err));
    }
    fetchData();

  }, [url]);

  // console.log("dbdata", dbData);

  return dbData;
};

export default useFetchMultipleDbData;
