import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";
//  const BASE_URL = "http://www.gptobulavaripalliap.in:80/api/";


const api = axios.create({
  baseURL: BASE_URL,
});

export {api,BASE_URL};
