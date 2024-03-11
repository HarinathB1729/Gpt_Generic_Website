import TelEngObjBuilder from "./TelEngObjBuilder";

const TelEngObjBuilderMultiple = (obj) => {
 let temp = {};

  // console.log("object", obj);
  for (const [key, value] of Object.entries(obj)) {
    // console.log("value",value)
    temp = {...temp,  [key]: TelEngObjBuilder(value) };
  }
  // console.log("telengmultiple temp", temp);
  return temp;
};

export default TelEngObjBuilderMultiple;
