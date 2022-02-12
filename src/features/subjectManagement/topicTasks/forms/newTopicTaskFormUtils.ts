import { HTTPPost } from "../../../../shared/api/apiHandle";
import { getURLInsertTopic } from "../../../../shared/constants/ApiURL";

export interface IAddTopicTaskRequestModel{
    topicId: number,
    action: string,
    actionDescription: string,
    actionSource: string,
    revisionItem: string,
    doneQuestionQuantity: number,
    correctQuestionQuantity: number
}

export interface ITopicResponseModel{
    topicId: number,
    name: string,
    anotations: string,
    subjectId: number
}

export const saveTopicTask = async (requestModel: IAddTopicTaskRequestModel): Promise<any> =>{
    const url = getURLInsertTopic();
    const response = await HTTPPost(url, requestModel);
    return response;
};


