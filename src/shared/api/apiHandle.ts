import axios from "axios";
import { ERROR_SAVE_MESSAGE } from "../constants/Messages";


export const SUCCESS = 1;
export const FAIL = 2;

export const HTTPGet = async (URL: string): Promise<any> => {
  return await axios.get(URL).then((res) => res.data);
};

export const HTTPPost = async (URL: string, body: object): Promise<any> => {
  const response = await axios.post(URL, body).then((response) => response)
  .catch((error) => error.response);

  return handleResponse(response)
};

export const HTTPDelete = async (URL: string): Promise<any> => {
  return axios.delete(URL).then((res) => res.data);
};

const handleResponse = (response:any) =>{
  if (handleResponseStatus(response.status) === SUCCESS){
    return{
      status: SUCCESS, 
      data: response.data
    };
  }
  
  return{
    status: FAIL, 
    data: buildErrorMessages(response.data)
  }; 
}


const handleResponseStatus=(responseStatus:number)=>{
  if(responseStatus === 200)
    return SUCCESS;

  return FAIL;
}

function buildErrorMessages(errorMessages:string[]){
  let finalMessage = ERROR_SAVE_MESSAGE+":";
  errorMessages.forEach((message) => finalMessage += ' ' + message);
  return finalMessage;
}