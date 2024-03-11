
const TelEngObjBuilder = (obj) => {
  let engObj = {};
  let telObj = {};

  // console.log("object", obj);
  for (const [key, value] of Object.entries(obj)) {
    if (key.includes("_en")) 
      engObj = { ...engObj, [key.split("_")[0]]: value };
    else if (key.includes("_tel"))
      telObj = { ...telObj, [key.split("_")[0]]: value };
    else {
      telObj = { ...telObj, [key]: value };
      engObj = { ...engObj, [key]: value };
    }
  }

  // console.log("engobj, telobj",engObj,telObj)
  return { ["en"]: engObj, ["tel"]: telObj };
};

export default TelEngObjBuilder;
