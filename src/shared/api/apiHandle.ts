import axios from "axios";

export const HTTPGet = (URL: string): any => {
  return axios.get(URL).then((res) => res.data);
};
