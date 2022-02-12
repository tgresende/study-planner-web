import axios from "axios";


export const SUCCESS = 1;
export const FAIL = 2;

export const HTTPGet = async (URL: string): Promise<any> => {
  return await axios.get(URL).then((res) => res.data);
};

export const HTTPPost = async (URL: string, body: object): Promise<any> => {
  let data;
  const response = await axios.post(URL, body).then((response) => response)
  .catch((error) => error.response);

  return {
    status: handleResponseStatus(response.status), 
    data: response.data
  };
};

export const HTTPDelete = async (URL: string): Promise<any> => {
  return axios.delete(URL).then((res) => res.data);
};


const handleResponseStatus=(responseStatus:number)=>{
  if(responseStatus === 200)
    return SUCCESS;

  return FAIL;
}