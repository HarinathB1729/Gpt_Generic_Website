import {api} from "../../api";


export default async function callAxiosPost(url, data, headers) {
  await api
    .post(url, data, { headers })
    .then((response) => {
      // console.log('Axios POST request successful!', response);
      return response.data;
    })
    .catch((error) => {
      // console.error('Axios POST request failed!', error);
      return error;
    });
}
