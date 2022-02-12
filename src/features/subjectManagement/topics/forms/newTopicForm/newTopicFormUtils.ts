import { HTTPPost } from "../../../../../shared/api/apiHandle";
import { getURLInsertTopic } from "../../../../../shared/constants/ApiURL";
import { ERROR_SAVE_MESSAGE } from "../../../../../shared/constants/Messages";

export interface ITopicRequestModel{
    name: string,
    anotations: string,
    subjectId: number
}

export interface ITopicResponseModel{
    topicId: number,
    name: string,
    anotations: string,
    subjectId: number
}

export const saveTopic = async (requestModel: ITopicRequestModel): Promise<any> =>{
    const url = getURLInsertTopic();
    const response = await HTTPPost(url, requestModel);
    return response;
};

export function buildErrorMessages(errorMessages:string[]){
    let finalMessage = ERROR_SAVE_MESSAGE+":";
    errorMessages.forEach((message) => finalMessage += ' ' + message);
    return finalMessage;
}
