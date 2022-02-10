import axios from "axios";

export const HTTPGet = async (URL: string): Promise<any> => {
  return await axios.get(URL).then((res) => res.data);
};

export const HTTPPost = async (URL: string, body: object): Promise<any> => {
  return axios.post(URL, body).then((res) => res.data);
};

export const HTTPDelete = async (URL: string): Promise<any> => {
  return axios.delete(URL).then((res) => res.data);
};
