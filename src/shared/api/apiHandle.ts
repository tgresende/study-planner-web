import axios from "axios";

export const HTTPGet = (URL: string): any => {
  return axios.get(URL).then((res) => res.data);
};

export const HTTPPost = (URL: string, body: object): any => {
  return axios.post(URL, body).then((res) => res.data);
};

export const HTTPDelete = (URL: string): any => {
  return axios.delete(URL).then((res) => res.data);
};
