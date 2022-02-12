import { HTTPPost } from "../../../../shared/api/apiHandle";
import { getURLInsertTopicTask } from "../../../../shared/constants/ApiURL";

export interface IAddTopicTaskRequestModel{
    topicId: number,
    action: string,
    actionDescription: string,
    actionSource: string,
}

export interface IAddTopicTaskResponseModel{
    topicTaskId: number,
    topicId: number,
    action: string,
    actionDescription: string,
    actionSource: string,
    status: number
}

export const saveTopicTask = async (requestModel: IAddTopicTaskRequestModel): Promise<any> =>{
    const url = getURLInsertTopicTask();
    alert(url)
    const response = await HTTPPost(url, requestModel);
    return response;
};


